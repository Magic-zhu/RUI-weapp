//Component Object
Component({
    properties: {
        height: {
            type: String,
        },
    },
    data: {
        left: 0,
        animation: null,
    },
    lifetimes: {
        attached: function () {
            this.state = {
                x:0,
                left:0,
                lock:0,
                position:0,
                now:0,
            }
         },
        moved: function () { },
        detached: function () { },
    },
    pageLifetimes: {
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
    methods: {
        handleLongTap(){
            this.triggerEvent('onLongTap')
        },
        handleTap(){
            this.setData({
                left:0
            })
            this.triggerEvent('onTap')
        },
        move(e) {
            if (this.state.lock == 1) {
                return null
            }
            this.state.position = e.changedTouches[0].clientX - this.state.x;
            this.state.left = this.state.now + this.state.position;
            if(this.state.left>=-20){
                this.state.left = 0;
            }
            this.setData({
                left:this.state.left
            })
        },
        start(e) {
            if (this.state.lock == 1) {
                return null
            }
            this.state.x = e.changedTouches[0].clientX;
        },
        end() {
            if (this.state.lock == 1) {
                return null
            }
            if(this.state.left>=-20){
                this.state.left = 0;
                return null
            }
            if(this.state.left<-200 ){
                this.moveAnimation(-750);
                this.handleTap();
            }
            if (this.state.left <= -100 && this.state.left>= -200) {
                this.moveAnimation(-100);
            }
            if (this.state.left < 0 && this.state.left > -100) {
                this.moveAnimation(0);
            }
        },
        moveAnimation(target) {
            this.state.lock = 1;
            let p = setInterval(() => {
                if (this.state.left < target) {
                    this.state.left = this.state.left + 10;
                    if (this.state.left > target) this.state.left = target;
                    this.setData({
                        left:this.state.left
                    })
                } else {
                    clearInterval(p);
                    p = null;
                    this.state.lock = 0;
                    this.state.now = this.state.left;
                }
            }, 16)
        }
    },
});