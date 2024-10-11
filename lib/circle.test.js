const Circle = require("./circle");

describe("Circle", () => {
    describe("shapeColor", () => {
        it("should have the correct shape color", () => {
            const circle = new Circle("AG","green","black");
            expect(circle.shapeColor).toEqual("black");
        });
    });

    describe("textColor", () => {
        it("should have the correct text color", () => {
            const circle = new Circle("AG","green","black");
            expect(circle.textColor).toEqual("green");
        });
    });

    describe("render", () => {
        it("should render the correct SVG for the circle", () => {
            const circle = new Circle("AG","green","black");
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${circle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`);
        });
    });
});
