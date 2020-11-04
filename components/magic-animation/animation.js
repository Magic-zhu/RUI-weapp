class MgAnimation {

    constructor(options) {
        this.ins = wx.createAnimation(this.handleOpt(options))
    }

    handleOpt(options) {
        let opt;
        if (options && !isNaN(options)) {
            opt = { duration: options }
        } else opt = options
        return opt
    }

    begin() {
        return this.ins
    }

    step(options) {
        return this.ins.step(this.handleOpt(options))
    }

    end() {
        return this.ins.export()
    }
    
    action(type,params) {
        if(typeof type !=='string') throw new Error('type must be string')
        this.ins[type](params)
        return this
    }

    // 常用的动画

    /**
     * 缩放
     * @param {*} status - in或者out
     * @param {*} coefficent - 缩放系数 
     */
    scale(status, coefficent = 1) {
        let opacity;
        if (status == 'in') {
            opacity = 1
            coefficent = 1;
        }
        if (status == 'out') {
            opacity = 0
            coefficent = 1.2
        }
        this.ins.scale(coefficent).opacity(opacity).step(this.handleOpt(250));
        return this.ins.export()
    }

    fade(status) {
        let opacity;
        if (status == 'in') {
            opacity = 1
        }
        if (status == 'out') {
            opacity = 0
        }
        this.ins.scale(coefficent).opacity(opacity).step(this.handleOpt(250));
        return this.ins.export()
    }
}

export default MgAnimation;



