class Game{
    constructor(player1, player2){
        this.players = this.createPlayers(player1, player2);
        this.board = new Board();
        this.ready = false;
    }

    /**
     * craetes and returns an array of the player objects
     * @param {string} player1 player 1's name
     * @param {stirng} player2 player2's name
     * @returns array of the player objects
     */
    createPlayers(player1, player2){
        let players = [];
        players.push(new Player(player1, 1, 'green', true));
        players.push(new Player(player2, 2, 'red'));
        return players;
    }

    /**
     * starts the game
     */
    startGame(){
        this.board.drawBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    get activePlayer(){
        if(this.players[0].isActive){
            return this.players[0];
        }
        return this.players[1];
    }
}