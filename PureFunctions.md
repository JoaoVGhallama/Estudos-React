Funções puras / pure Functions
function add(a,b){
    total = a + b
    return total
}
isso é uma função pura, a mesma aceita 2 parametros, no caso A e B e retorna a soma desses valores.

ela é uma função pura pois não possui nenhuma dependecia externa, e portanto, não vai influenciar em nada externo, como mudar algum estado por exemplo.

uma função pura é como seguir uma receita, o resultado da mistura dos ingredientes é SEMPRE o mesmo, um ovo + um ovo sempre vai ser igual a dois ovos.

outro exemplo são Formulas matemáticas, como por exemplo:

y = 2x
se x = 2, então y = 4.

se x = 4, então y = 8.

e por ai vai, o resultado sempre vai ser o mesmo, no caso da nossa formula, ele sempre vai ser o dobro do valor de X.

React foi criado atraves desse conceito. React assume que todo componente escrito é uma função pura. isso significa que Componentes sempre devem retornar o mesmo JSX dado os mesmos inputs.

porque a pureza importa?

Idempotente - Você sempre tera o mesmo resultado toda vez que executar o progama com os mesmos inputs.

Não possui efeitos colaterais no rendering

Não modifica valores não-locais: Componentes e Hooks não devem de forma alguma modificar valores que não foram criados localmente.

Componentes sempre devem ser idempotentes

Componentes devem sempre retornar o mesmo output dado os seus inputs. Idempotencia se refere a ideia de sempre obter o mesmo resultado toda vez que aquela parte do código for executada com os mesmos valores.

bom, acho que pra avançar mais nesse conteudo eu preciso estudar um pouco mais sobre Rendering. então por enquanto é isso.