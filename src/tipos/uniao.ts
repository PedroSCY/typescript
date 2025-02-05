type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' |  'F'

let nota:  NotaOuConceito = 7
nota = 'C' 


function imprimirNota(n : NotaOuConceito) {
    if(typeof n === 'number') {
        console.log(`Nota: ${nota}`)
    } else {
        console.log(`Conceito: ${nota}`)
    }
}
imprimirNota(nota)
