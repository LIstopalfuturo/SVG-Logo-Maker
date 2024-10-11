
const Triangle=require("./triangle")

describe("Triangle",()=>{

    describe("shapeColor",()=>{
        it("test shapeColor",()=>{
            const triangle= new Triangle("AG","green","black")
        expect(triangle.shapeColor).toEqual("black") 
        })
       
    })

    describe("textColor",()=>{
        it("test textColor",()=>{
        const triangle=new Triangle("AG","green","black")
        expect(triangle.textColor).toEqual("green")
    })
})
      describe("render",()=>{
        it ("test triangle svg log",()=>{
            const triangle=new Triangle("AG","green","black")
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">'<polygon width="300" height="200 points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`)

        })
      })

    })