class GameObject {

    static all = []

    static destroyAll() {
        GameObject.all.forEach(function (object) {
            object.destroy()
        })
    }

    destroy() {
        this.image.remove()
        GameObject.all = GameObject.all.filter(object => object != this)
    }

    constructor(assetRoot, x, y, width = 75){
        this.assetRoot = assetRoot
        this.image = document.createElement('img')
        document.body.append(this.image)
        this.image.style.width = `${width}px`
        this.image.style.position = 'absolute'
        this.image.style.left = `${x}px`
        this.image.style.bottom = `${y}px`
        this.image.src = `${this.assetRoot}/static.gif`

        GameObject.all.push(this)
    }

    width(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.width
    }

    height(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.height
    }

    leftSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.left
    }

    rightSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.right
    }

    topSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.top
    }

    bottomSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.bottom
    }

}