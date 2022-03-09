/*
Aula 1 CONCEITOS BÁSICOS- Curso de React do básico ao avançado
Geek University - Udemy
Sintaxe de atributos em React é com cammel case (escreveAssim)
class em JSX é className - class é uma palavra reservada JS.
*/

//Principais conceitos***

//const elemento = <h1>Bom dia!</h1>; //Exemplo de JSX, que mistura JavaScript e HTML. Dessa forma, é possível adicionar lógica diretamente aos componentes da página.

const nome = "João";
const elemento = <h1>Bom dia, {nome}!</h1>; // No exemplo, dentro das chaves usamos uma constante (nome) do JavaScript dentro do cabeçalho <h1></h1> do HTML.

const soma = <div>Resultado: {3 + 5}</div>; //No exemplo, usamos uma operação matemática. O react vai renderizar o resultado da operação dentro das chaves, como se fosse em JS.

const data = <p>Compra feita em {formatarData(dataPedido)}</p>; // Nesse exemplo, chamamos uma função dentro do JSX.

//Expressões em JSX***
function ola(usuario){
    if(usuario){
        return <h1>Olá, {formatarNome(usuario)}!</h1>;
    }

    return <h1>Olá, estranho...</h1>;
}

//Atributos com JSX***
const elemento1 = <div tabIndex="0">...</div> //String como se fosse html
const elemento2 = <img src={usuario.avatarUrl} /> //Usamos as chaves caso seja o atributo venha de um elemento JS.

/*Componentes***
Podem ser escritos como uma function ou como uma class
*/

function BemVindo(props){
    return <p>Olá, {props.nome}</p>;
}

class BemVindo extends React.Component{
    render(){
        return <h1>Hello, {this.props.nome}</h1>;
    }
}