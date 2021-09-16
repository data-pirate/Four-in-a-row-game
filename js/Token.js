class Token{
    constructor(player, index){
        this.player = player;
        this.color = player.color;
        this.id = `token-${index}-${player.id}`;
        this.isUsed = false;
    }

    drawHTMLToken(){
        const div = document.createElement('div');
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'token');
        div.style.backgroundColor = this.color;
        document.getElementById('game-board-underlay').appendChild(div);
    }

    get htmlToken(){
        const token = document.getElementById(this.id);
        return token;
    }
}