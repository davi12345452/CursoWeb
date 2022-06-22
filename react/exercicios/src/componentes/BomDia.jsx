import React from "react"

// eslint-disable-next-line import/no-anonymous-default-export
//export default props => //props é um parâmetro convencionado
//    <React.Fragment>
//        <h1>Bom dia {props.nome}, idade = {props.idade}</h1> 
//        <h2>Até mais {props.nome}</h2>
//    </React.Fragment>

//Não pode chamar dois elementos diretos, temos que colocar dentro de outros
//No caso acima, poderíamos chamar uma div para colocar o h1 e h2, porém, 
//para deixar o código mais limpo, usamos o React.Fragment

/* Além de usar div ou React.Fragment para chamar dois ou mais módulos
HTML em uma função .jsx, podemos usar arrays. Porém, nos arrays, mesmo
que funcione, é interessante usar uma key para identificar*/

//Recomendado usar div ou fragment

// eslint-disable-next-line import/no-anonymous-default-export
export default props => [
    <h1 key='h1'>Bom dia {props.nome}</h1>, 
    <h2 key='h2'>Até mais {props.nome}</h2>
]

