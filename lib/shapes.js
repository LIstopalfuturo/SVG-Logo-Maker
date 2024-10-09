class Shape{
    constructor(text,textColor,shapeColor){
        this.text=text;
        this.textColor=textColor;
        this.shapeColor=shapeColor
    }
    render(){
        return new Error("create a render for the children")
    }
}

module.exports=Shape