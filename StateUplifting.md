# State uplifting - compartilhando estados entre componentes

em algumas ocasiões, você pode querer que o estado de dois componentes sejam compartilhadas juntas. pra fazer isso, remova o estado de ambos, mova-os para o seu parente em comum mais proximo, e passe as mesmas via `props`, isso é conhecido como ***lifting state up***

### exemplo 

nesse exemplo teremos o componente pai `Grupo` renderiza dois componentes filhos `Mensagem`

cada componente `mensagem` possue um state boolean `esta ativado` que determina se seu conteudo é visivel

```
import {useState} from 'react'

function Mensagem({nome, texto}){
    const [estaAtivado, setEstaAtivado] = useState(false)
    return (
        <section>
            <h1>joão</h1>
            {!estaAtivado? (
                <p>texto aqui</p>
            ) : (
                <button onClick = {() => setEstaAtivado(true)}>
                show
                </button>
            )}
        </section>

    )
}
```

perceba que, clickar em um botão de uma mensagem, não altera a outra, as mesmas são independentes

mas agora, queremos o seguinte design: **Apenas uma mensagem pode ser mostrada por vez**

para fazer isso, vamos seguir os seguintes passos: 

 1. **remover** o estado dos componentes filhos, nesse caso, `Mensagem`
 2. **enviar informações** de um componente em comum, no caso `Grupo`
 3. **adcionar estados** no componente em comum, e passar isso junto com eventHandlers.

 isso vai permitir que o componente `Grupo` coordene suas duas `Mensagens`e que apenas uma seja mostrada por vez. 


 ### Passo 1 - Remover o estado dos componentes filhos 

 comece removendo seu useState -> `const [estaAtivado, setEstaAtivado] = useState(true)`

 e ao inves de ter seu estado no componente filho, adicione EstaAtivado na lista de props do seu componente `mensagem`

 ```
function Mensagem({nome, texto, estaAtivado})
 ```

### passo  2 - Enviar info do parente em comum 

```
import {useState} from 'react'

export default function Grupo(){
    return (
        <>
        <Mensagem nome='Nome' mensagem='mensagem'/>

        </>
    )
}


```

terminar depois