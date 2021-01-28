class ScoreBoard {
    score: number
    grade: number
    base: number
    max: number
    scoreHtml: HTMLElement
    gradeHtml: HTMLElement
    constructor(max:number = 10, base: number = 10) {
        this.scoreHtml = document.getElementById('score')
            .getElementsByTagName('span')[0]
        this.gradeHtml = document.getElementById('grade')
            .getElementsByTagName('span')[0]
        this.score = 0
        this.grade = 1
        this.base = base
        this.scoreHtml.innerText = this.score+''
        this.gradeHtml.innerText = this.grade+''
    }
    // 分数增加
    addScore () {
        this.score++
        this.scoreHtml.innerText = this.score+''
        if (this.score % this.base === 0) {
            this.addGrade()
        }
    }
    // 等级增加
    addGrade () {
        if (this.grade > this.max) {
            return
        }
        this.grade++
        this.gradeHtml.innerText = this.grade+''
    }
}

export default ScoreBoard;