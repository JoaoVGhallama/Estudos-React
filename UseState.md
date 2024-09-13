# useState 

useState é um hook de React que permite que você adicione uma variavel de estado em seus componentes.


## uso

Chame o useState no nivel inicial do seu componente para declarar uma variavel de estado.

```
function Component(){
    const [age, setAge] = useState(19)
    const [name, setName] = useState('João')
}
 ```

 a convenção padrão é nomear estado de variaveis como -> [algumaCoisa, setAlgumaCoisa] usando desestruturação de Arrays.


 ## parametros 

 `estado inicial` o valor que você deseja que o estado seja inicializado, pode ser qualquer um valor de qualquer tipo, inclusive uma função. 

 se você passar uma função como initialState/estadoInicial, ela vai ser tratada como uma função iniciadora. ela deve ser pura, não deve receber argumentos e deve retornar um valor de qualquer tipo.
React ira chamar a mesma quando inicializar seu componente, e guarda seu valor de retorno como o `Estado inicial 


## retornos

useState retorna um array com exatos dois valores, sendo eles: 

 1. o estado atual, durante o primeiro render, ele vai ser igual o estado inicial que você passou 
 ```
    const [state, ...] = useState( ) -> state vai ser igual ao argumento de useState. 
 ```

 2. a função 'set' permite que você atualize o seu estado/state para um valor diferente, assim ativando um re-render 👌

 useState é um hook, então você só pode chama-lo no inicio dos seus componentes. Você também não pode chama-los dentro de loops ou condições.

 ## funções set, setAlgumaCoisa(proximoEstado)

 a função `set` retornada pelo `useState` permite que você atualize o estado para um valor diferente e ative um re-render. Você pode passar um estado diretamente nele, ou passar em uma função. 

 ```
 const [nome, setNome] = useState('João')
    function handleClick(){
        setNome('Vitor'); <---- altera o valor de 'João' para 'Vitor'
    }
```

### parametros 

`proximo estado`: o valor que você deseja para o estado. Pode ser qualquer tipo de valor, inclusive uma função.

### retornos 

funções `set` não possuem um valor de retorno.


## uso 

### Adicionando state em um componente 

chame `useState` para declarar uma ou mais variaveis de estado.

```
import {useState} from 'react'  <--- realiza a importação

function meuComponente() {
    const [idade, setIdade] = useState(19) <---- estado inicial de idade.
    const [nome, setNome] = useState('Joao') <---- estado inicial de nome.
0
}

```
como dito antes, o padrão é nomear variaveis de estado dessa maneira -> [algumaCoisa, setAlgumaCoisa]

`useState` sempre retorna um array com dois valores.

 1. o <span style='color:lightblue'>Estado atual</span> da variavel de estado. setado no `initialState` provido.

 2. a <span style='color:orange'>Função set</span> que permite mudar o estado para qualquer outro valor, como uma resposta de interação.

 para atualizar oque é mostrado na tela, chame a função `set` com algum valor para o proximo estado. 

 ```
function handleClick(){
    setNome('Vitor')
}
 ```
React vai guardar o valor do proximo estado, renderizar seu componente novamente com novos valores, e atualizar a UI.


## atualizandoo e estado baseado em sua forma anterior

suponha que `idade` é `42`. Esta função chama setIdade(age + 1) tres vezes.

```
function HandleCLick(){
    setIdade(idade + 1) <----- 42 + 1
    setIdade(idade + 1) <----- 43 + 1
    setIdade(idade + 1) <----- 44 + 1
}
```

depois de acionar essa função uma vez, você pode imaginar que o estado de idade seria de 45, certo? errado. o estado de idade vai ser 45. Isso ocorre pois chamar a função `set` não atualiza seu estado no codigo atual, apenas apos o re-render. ou seja todos esses `setIdade` se tornam inuteis, pois apenas um vai ser renderizado novamente.

para resolver esse problema, você pode usar uma *função updater* para o setIdade ao inves de apenas passar um estado. 


```
function handleClick(){
    setIdade(a => a + 1)
    setIdade(a => a + 1)
    setIdade(a => a + 1)
}

```

React vai colocar todas essas funções em uma fila, e então, no proximo render, ele vai chama-las e executa-las na mesma ordem. 

 1. a => a + 1 vai receber `42` como um estado pendente, e retorna `43` como um proximo estado
 2. a => a + 1 vai receber `43` como um estado pendente, e retorna `44` como um proximo estado
 3. a => a + 1 vai receber `44` como um estado pendente, e retorna `45` como um proximo estado

 como não existem nenhum outro update na fila, React vai guardar o valor de `45` como atual. 

 por convenção, é comum nomear o argumento pendente do estado com a primeira letra da variavel de estado. entretando, você pode nomea-la como quiser. 
 

 ## atualizando objetos e arrays no estado

 você pode colocar objetos e arrays em estados. em React, State é considerado `read-only`então, você deve substitui-lo ao inves de modificar seus objetos existentes. Por exemplo, se você tiver um objeto `form` no seu estado, não modifique ele: 

 ```
 🚩 NÃO FAÇA 

 form.primeiroNome = 'João'
```
ao inves disso, substitua todo o objeto, criando um novo: 

```

✅ FAÇA 
setForm({
    ...form,
    primeiroNome: 'joao'
})
```

## evite recriar o estado inicial

react salva o estado inicial uma vez e ignora o mesmo em todas as outras renders

```
function listaDeAfazeres() {
    const [afazeres, setAfazeres] = useState(criarListaInicial( ))
} //...
```

apesar o resultado do CriarListaInicial( ) só ser usado no render inicial,
você ainda esta chamando essa função em todo re-render. Isso pode ser um desperdicio se esta criando arrays gigantes ou executando calculos pesados.

pra resolver esse problema, você deve passar a sua função de inicio como iniciadora no useState()

```
function ListaDeAfazeres(){
    const [afazeres, setAfazeres] = useState(criarListaInicial)
}
```

<h1 style="text-align:center; margin-top:100px;">FIM, por enquanto ✅</h1>