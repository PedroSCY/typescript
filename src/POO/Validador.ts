export default class Validador {

    static readonly ERRO_DESCONHECIDO = "erro_desconhecido"

  static maiorQueZero(n: number, msgErro: string) {
    if (n <= 0) throw new Error(msgErro);
  }

  static entre(n: number, min: number, max: number, msgErro: string) {
    if (n < min || n > max) throw new Error(msgErro);
  }
}
