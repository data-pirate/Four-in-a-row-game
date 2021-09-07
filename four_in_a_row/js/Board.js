class Board{
    constructor(){
        this.rows = 7;
        this.columns = 6;
        this.spaces = this.createSpaces();
    }

    /**
     * creates space objects and appends to the space array
     * @returns {array} 2d spaces grid
     */
    createSpaces(){
        let spaces = [];
        for(let i = 0; i < this.rows; i++){
            let row = [];
            for(let j = 0; j < this.columns; j++){
                row.push(new Space(i, j));
            }
            spaces.push(row);
        }

        return spaces;
    }


    drawBoard(){
        for(let row of this.spaces){
            for(let each of row){
                each.drawSVGSpaces();
            }
        }
    }
}