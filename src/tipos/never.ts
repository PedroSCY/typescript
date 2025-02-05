// never é usado quando a função não de deve ter nenhum retorno. mesmo que não tenha explicitamente ela sempre retorna, o new throw é um exemplo pois ele interrompe o *****. 
function falhar(msg: string): never {
    throw new Error(msg)
}

falhar('mensagem de erro')