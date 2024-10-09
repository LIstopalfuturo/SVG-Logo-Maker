const Circle=require("./circle")

describe("Circle",()=>{

    describe("shapeColor",()=>{
        it("test shapeColor",()=>{
            const circle= new Circle("ACG","white","green")
        expect(circle.shapeColor).toEqual("green") 
        })
       
    })

    describe("textColor",()=>{
        it("test textColor",()=>{
        const circle=new Circle("ACG","white","green")
        expect(circle.textColor).toEqual("white")
    })
})
      describe("render",()=>{
        it ("test circle svg log",()=>{
            const circle=new Circle("ACG","white","green")

            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${circle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`)

        })
      })

    })