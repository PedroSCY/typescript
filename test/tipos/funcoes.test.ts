import { multiplicar, saudacao } from "../../src/tipos/funcoes"

test("Deve retornar uma saudacao baseada na hora atual", () => {
    const s = saudacao()
    const valid = new Date().getHours() < 12 ? 'Bom dia' : 'Boa tarde'
    expect(s).toBe(valid)
})

test('Deve multiplicar dois numeros', () => {
    const resultado = multiplicar(2,10)
    expect(resultado).toBe(20)
})