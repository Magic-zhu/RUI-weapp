class animation {

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

export default animation;



