
const Shape = require('./shapes.js')

describe("Shape",()=>{
     
    describe("shapeColor",()=>{
        it("test shapeColor",()=>{
            const shape= new Shape("AG","green","black")
            expect(shape.shapeColor).toEqual("black")
        })
    })

    describe("textColor",()=>{
        it("test text Color", ()=>{
            const shape= new Shape("AG","green","black")
            expect(shape.textColor).toEqual("green")
        })
        
    })

     describe("render",()=>{
        it ("test Shape svg log", ()=>{
            const shape= new Shape("AG","green","black")
  
            expect(shape.render()).toEqual("Child is required to use its own render()")
        })
     })

})