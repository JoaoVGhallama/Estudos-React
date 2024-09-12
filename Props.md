# Props - propriedades para um componente 

Componentes React usam props (propriedades) para se comunicar entre si. Todo Componente pai pode passar informações para o seu componente filho dando a eles props. de certa forma, Props se parecem muito com atributos HTML, a diferença é que você pode passar valores em JS por eles, incluindo objetos, arrays e funções.

props servem para dar dinamica a código, assim, deixando qualquer interface muito mais viva e interativa.

## como posso passar props para um componente?

props são geralmente passados de um componente pai para um componente filho, logo, temos que ditar todas os props no componente pai, como no exemplo:


### aqui temos 2 componentes ->

#### componente pai

```
function Pai() {
    return (
        <Filho/>
    )
}
```

#### componente filho

```
function filho(){
    return (
        <h1>olá, me chamo João</h1>
    )
}
```
Aqui temos dois componentes, e junto com eles surgem varios problemas. E o principal deles é: Como posso ter um nome diferente de João Dentro do componente filho?

podemos resolver esse problema com uma simples, porém pratica solução, dessa maneira: 

#### componente pai - assim como no html, passamos 'nome' como um atributo. quase identico a algo como src, ou alt.

```
function Pai() {
    return (
        <Filho nome = 'João'/> <------ passamos o valor do atributo 'nome'
        <Filho nome = 'Marcos'/> <---/
    )
}
```

#### componente filho - perceba que passamos 'props' como argumento na função filho

```
 
function filho(props){
    return (
        <h1>olá, me chamo {props.nome}</h1> <----- chamamos o nosso props dentro do {} e nele, utilizamos o método 'nome'
    )
}
```

dessa maneira, podemos ter quantos componentes 'Filho' quisermos, cada um com seu próprio nome, mas ainda sim, existe uma maneira melhor de utilizar os props, seria dessa forma.

#### componente pai

```
function Pai() {
    return (
        <Filho name = 'João'/>
    )
}
```

#### componente filho - veja que ao inves de passar o argumento props, passamos o nome do atributo diretamente, nesse caso 'name'

```
function filho({name}){ 
    return (
        <h1>olá, me chamo {name}</h1>
    )
}
```