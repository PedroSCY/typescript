export function saudacao(): string {
    const manha = new Date().getHours() < 12
    console.log(manha)

    return manha ? 'Bom dia' : 'Boa tarde'
}

export function multiplicar(n1: number, n2: number): number {
    return n1 * n2 
}