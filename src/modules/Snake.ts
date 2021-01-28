class Snake {
    snakeHeader: HTMLElement
    snake: HTMLElement
    snakeBody: HTMLCollection
    constructor() {
        this.snake = document.getElementById('snake')
        this.snakeHeader = this.snake.getElementsByTagName('div')[0]
        this.snakeBody = this.snake.getElementsByTagName('div')
    }
    // 获取蛇头x坐标
    get x() {
        return this.snakeHeader.offsetLeft
    }
    // 获取蛇头y坐标
    get y() {
        return this.snakeHeader.offsetTop
    }
    // 更新x坐标方法
    set x (value: number) {
        if (this.x === value) return
        if (value < 0 || value > 290) {
            throw onerror('游戏结束')
        }
        if (this.snakeBody[1] && value === (this.snakeBody[1] as HTMLElement).offsetLeft) {
            if(this.x - value > 0) {
                value = this.x + 10
            } else {
                value = this.x - 10
            }
        }
        this.runBody()
        this.snakeHeader.style.left = value + 'px'
        this.isHeaderVsBody()
    }
    // 更新y坐标方法
    set y (value: number) {
        if (this.y === value) return
        if (value < 0 || value > 290) {
            throw onerror('游戏结束')
        }
        if (this.snakeBody[1] && value === (this.snakeBody[1] as HTMLElement).offsetTop) {
            if(this.y - value > 0) {
                value = this.y + 10
            } else {
                value = this.y - 10
            }
        }
        this.runBody()
        this.snakeHeader.style.top = value + 'px'
        this.isHeaderVsBody()
    }
    // 添加节点
    addBody () {
        const div = document.createElement('div')
        this.snake.appendChild(div)
    }
    // 身体运行
    runBody () {
        for (let i = this.snakeBody.length-1; i > 0; i--){
            const x = (this.snakeBody[i-1] as HTMLElement).offsetLeft;
            const y = (this.snakeBody[i-1] as HTMLElement).offsetTop;
            (this.snakeBody[i] as HTMLElement).style.left = x + 'px';
            (this.snakeBody[i] as HTMLElement).style.top = y + 'px';
        }
    }
    // 判断是否撞到身体了
    isHeaderVsBody () {
        if (!this.snakeBody[1]) {
            return
        }
        for(let i = 1; i < this.snakeBody.length; i++) {
            let bg = this.snakeBody[i] as HTMLElement
            if (bg.offsetLeft === this.x && bg.offsetTop === this.y) {
                throw onerror('撞到自己了')
            }
        }
    }
}

export default Snake;