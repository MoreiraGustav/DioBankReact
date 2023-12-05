import { soma } from "./soma";
import { multi } from "./soma";

describe("soma", () => {
  it("deve somar 1 ao numero informado", () => {
    const value = soma(1)
     expect(value).toBe(2)
    })

    it('deve multiplicar o numero por dois', () => {
        const value = multi(2, 2)
        expect (value).toBe(4)
    })
    it('deve multiplicar o numero por tres', () => {
        const value = multi(2, 3)
        expect (value).toBe(6)
    })
    it('deve informar um erro com multiplicador diferente de dois ou tres', () => {
        const value = multi(2, 4)
        expect (value).toBe('Error')
    })
});
