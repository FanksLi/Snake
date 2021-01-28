import Food from "./Food";
import ScoreBoard from "./ScoreBoard";
import Snake from "./Snake";

class Operation {
    food: Food
    scoreBoard: ScoreBoard
    snake: Snake
    direction: string = ''
    isRun: boolean = true
    constructor() {
        this.food = new Food()
        this.scoreBoard = new ScoreBoard(10, 5)
        this.snake = new Snake()
        this.initOperation()
    }
    initOperation () {
        document.addEventListener('keydown',this.keydownFunc.bind(this))
        this.run()
    }
    keydownFunc (e) {
        this.direction = e.key
    }
    run () {
        let x = this.snake.x
        let y = this.snake.y
        switch (this.direction) {
            case 'up':
            case 'ArrowUp':
                y -= 10
                break;
            case 'Down':
            case 'ArrowDown':
                y += 10
                break;
            case 'Left':
            case 'ArrowLeft':
                x -= 10
                break;
            case 'Right':
            case 'ArrowRight':
                x += 10
                break;
        }
        if (this.food.x === x && this.food.y === y) {
            this.food.foodPosition()
            this.scoreBoard.addScore()
            this.snake.addBody()
        }
        // 截获错误
        try{
            this.snake.x = x
            this.snake.y = y
        }catch{
            alert('游戏结束 game over')
            this.direction = ''
            this.isRun = false
        }
        this.isRun && setTimeout(this.run.bind(this), 300-(this.scoreBoard.grade-1)*30)
    }
}

export default Operation;