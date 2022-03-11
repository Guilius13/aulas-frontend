function ola(){
    return "Olá!"
}

console.log(ola())

function olaPessoa(nome){
    return `Olá, ${nome}!`
}

console.log(olaPessoa("Guilherme"))

//Arrow function
const ola2 = () => {
    return "Olá novamente!"
}

console.log(ola2())

const olaPessoa2 = (nome, idade) => { //se for somente um parâmetro, não é necessário usar o parêntese
    return `Olá novamente, ${nome}! Sua idade é ${idade} anos`
}

console.log(olaPessoa2("Guilherme", 28))

const olaPessoa3 = nome => `Olá novamente, ${nome}!` //Sem parênteses porque é somente um argumento. Sem chaves porque o retorno é somente em uma linha, um único comando.
console.log(olaPessoa3("Guilherme"))