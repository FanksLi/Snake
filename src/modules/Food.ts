class Food {
    foodBox: HTMLElement
    x: number
    y: number
    constructor() {
        this.foodBox = document.getElementById('food')
        this.foodPosition()
    }
    // 谁知随机位置
    foodPosition () {
        const x = Math.round(Math.random() * 29) * 10
        const y = Math.round(Math.random() * 29) * 10
        this.x = x
        this.y = y
        this.foodBox.style.left = this.x + 'px'
        this.foodBox.style.top = this.y + 'px'
    }

}

export default Food;