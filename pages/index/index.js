//index.js
import Ani from '../../components/magic-animation/animation'
Page({
    data: {
        navBarOptions: {
            barTitleText: "基础组件",
            frontColor: "#000000",
        },
        list: [
            {
                name: "Canvas库",
                path: "/pages/Canvas_Ex/index"
            },
            {
                name: "Animation库",
                path: ""
            },
            {
                name: "Button",
                path: "/pages/Button_Ex/index"
            },
            {
                name: "Cell",
                path: "/pages/Cell_Ex/index"
            },
            {
                name: "Popup",
                path: "/pages/Popup_Ex/index"
            },
            {
                name: "Curtain",
                path: "/pages/Curtain_Ex/index"
            },
            {
                name: "Image",
                path: "/pages/Image_Ex/index"
            },
            {
                name: "Icon",
                path: "/pages/Icon_Ex/index"
            },
        ],
        logoAnimation: null,
    },
    onLoad(){
        this.drawWebgl()
    },
    onTabItemTap() {
        // wx.vibrateShort();
    },
    jump(e) {
        wx.$.click(() => {
            let { index } = wx.$.get(e);
            wx.$.navigate(this.data.list[index].path);
        })
    },
    drawWebgl() {
        const query = wx.createSelectorQuery()
        let cavTimer
        let requestAnimationFrame = (function () {
            return function (callback) {
                cavTimer = setTimeout(() => {
                    clearTimeout(cavTimer);
                    cavTimer = null;
                    callback();
                }, 1000 /50);
            };
        })();
        query.select('#myCanvas').node().exec((res) => {
            const canvas = res[0].node
            var gl = canvas.getContext('webgl');
            let width = canvas.width;
            let height = canvas.height;
            var numMetaballs = 30;
            var metaballs = [];
            for (var i = 0; i < numMetaballs; i++) {
                var radius = Math.random() * 15 + 10;
                metaballs.push({
                    x: Math.random() * (width - 2 * radius) + radius,
                    y: Math.random() * (height - 2 * radius) + radius,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3,
                    r: radius * 0.75
                });
            }
            var vertexShaderSrc = `
              attribute vec2 position;
      
              void main() {
              // position specifies only x and y.
              // We set z to be 0.0, and w to be 1.0
              gl_Position = vec4(position, 0.0, 1.0);
              }
          `;
            //片元着色器
            var fragmentShaderSrc = `
              precision highp float;
              const float WIDTH = ` + (width >> 0) + `.0;
              const float HEIGHT = ` + (height >> 0) + `.0;
              uniform vec3 metaballs[` + numMetaballs + `];
              void main(){
                  float x = gl_FragCoord.x;
                  float y = gl_FragCoord.y;
                  float sum = 0.0;
                  for (int i = 0; i < ` + numMetaballs + `; i++) {
                      vec3 metaball = metaballs[i];
                      float dx = metaball.x - x;
                      float dy = metaball.y - y;
                      float radius = metaball.z;
                      sum += (radius * radius) / (dx * dx + dy * dy);
                  }
                  if (sum >= 1.0) {
                      gl_FragColor = vec4(y,x / WIDTH, y / HEIGHT, 1.0);
                      return;
                  }
                  gl_FragColor = vec4(1.0, 1.0, 1.0, 0.0);
              }
      `;
            var vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
            var fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);
            var program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);
            var vertexData = new Float32Array([
                -1.0, 1.0, // top left
                -1.0, -1.0, // bottom left
                1.0, 1.0, // top right
                1.0, -1.0, // bottom right
            ]);
            var vertexDataBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
            var positionHandle = getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(positionHandle);
            gl.vertexAttribPointer(positionHandle,
                2, // position is a vec2
                gl.FLOAT, // each component is a float
                gl.FALSE, // don't normalize values
                2 * 4, // two 4 byte float components per vertex
                0 // offset into each span of vertex data
            );
            var metaballsHandle = getUniformLocation(program, 'metaballs');
            loop();
            function loop() {
                for (var i = 0; i < numMetaballs; i++) {
                    var metaball = metaballs[i];
                    metaball.x += metaball.vx;
                    metaball.y += metaball.vy;
                    if (metaball.x < metaball.r || metaball.x > width - metaball.r) metaball.vx *= -1;
                    if (metaball.y < metaball.r || metaball.y > height - metaball.r) metaball.vy *= -1;
                }
                var dataToSendToGPU = new Float32Array(3 * numMetaballs);
                for (var i = 0; i < numMetaballs; i++) {
                    var baseIndex = 3 * i;
                    var mb = metaballs[i];
                    dataToSendToGPU[baseIndex + 0] = mb.x;
                    dataToSendToGPU[baseIndex + 1] = mb.y;
                    dataToSendToGPU[baseIndex + 2] = mb.r;
                }
                gl.uniform3fv(metaballsHandle, dataToSendToGPU);
                //Draw
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            }
            setInterval(()=>{
                loop()
            },20)
            function compileShader(shaderSource, shaderType) {
                var shader = gl.createShader(shaderType);
                gl.shaderSource(shader, shaderSource);
                gl.compileShader(shader);

                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
                }

                return shader;
            }
            function getUniformLocation(program, name) {
                var uniformLocation = gl.getUniformLocation(program, name);
                if (uniformLocation === -1) {
                    throw 'Can not find uniform ' + name + '.';
                }
                return uniformLocation;
            }
            function getAttribLocation(program, name) {
                var attributeLocation = gl.getAttribLocation(program, name);
                if (attributeLocation === -1) {
                    throw 'Can not find attribute ' + name + '.';
                }
                return attributeLocation;
            }
        })

    }
})
