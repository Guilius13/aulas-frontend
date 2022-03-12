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

// const pessoa = {
//     nome: 'João',
//     idade: 20
// }

// export default pessoa //import pessoa from ''


// //Exportações nomeadas
// const ola = nome => `Olá, ${nome}!`
// const soma = (n1, n2) => n1 + n2;
// export { ola, soma } // import { } from ''

//Classes

class Animal{
    constructor(f){
        this.familia = f;
    }

    andar = () =>{
        return 'andando...'
    }
}

class Cachorro extends Animal{
    constructor(n, i){
        super('Carnivoros')
        this.nome = n
        this.idade = i
    }

    latir = () => {
        return `${this.nome}: au! au!`
    }
}

let rex = new Cachorro('Xereu', 2)
console.log(rex)
console.log(rex.latir())
console.log(rex.andar())
console.log(rex.familia)

let max = new Cachorro('Max', 5)
console.log(max.latir())
