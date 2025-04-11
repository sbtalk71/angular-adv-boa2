import { add, divide, multiply, subtract } from "./calculator";

xdescribe("testing calcualtor functionality",()=>{

    it("add should return sum of 2 numbers",()=>{
        let addResult=add(10,20);
        expect(addResult).toBe(30);
    }),
    xit("multiply should return product of 2 numbers",()=>{
        let addResult=multiply(10,20);
        expect(addResult).toBe(200);
    }),
    it("divide should return division of 2 numbers",()=>{
        let addResult=divide(10,20);
        expect(addResult).toBe(.5);
    }),
    it("subtract should return diff of 2 numbers",()=>{
        let addResult=subtract(20,10);
        expect(addResult).toBe(10);
    }),
    it("add mock should return sum of 2 numbers",()=>{
       let calculatorMockForAdd={
            add: jest.fn().mockReturnValue(20)
        }
        expect(calculatorMockForAdd.add(10,10)).toBe(20);
    })

});