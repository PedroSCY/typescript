// usando essa estrategia é possivel atribuir valores que não estao predefinidos com mais facilidade
const Erros = {
    NOME_NULO: 'erro_nulo',
    EMAIL_NAO_ENCONTRADO: 'email_nao_encontrado',
    URL_INVALIDA: 'url_invalida'
} as const
// as const faz com que as propriedades do objeto referenciado não possam ser alteradas

let erro: string
erro = Erros.NOME_NULO
erro = 'cpf_invalido'

console.log(erro)