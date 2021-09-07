class Player{
    constructor(playerName, id, color, active = false){
        this.name = playerName;
        this.id = id;
        this.color = color;
        this.isActive = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * creates an array of the tokens
     * @param {integer} numberOfTokens 
     * @returns tokens array
     */
    createTokens(numberOfTokens){
        let tokens = [];
        for(let i = 0; i < numberOfTokens; i++){
            tokens.push(new Token(this, i));
        }

        return tokens;
    }

    get unusedTokens(){
        return this.tokens.filter(token => !token.isUsed);
    }

    get activeToken(){
        return this.unusedTokens[0];
    }
}