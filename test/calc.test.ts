import { somar } from "../src/calx"

test('deve somar corretamente', () => { 
    const resultado = somar(2,3)
    expect(resultado).toBe(5)
 })