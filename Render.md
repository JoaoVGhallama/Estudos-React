# React rendering

antes de qualquer componente ser mostrado na tela, ele deve ser renderizado pelo React, imagino que entender esses conceitos vai me ajudar entender a como o meu codigo é executado e como explicar seu comportamento.

## Exemplo da cozinha

(peguei esse exemplo das docs do react)

imagine que seus componentes são cozinheiros em uma cozinha, juntando ingredientes para produzir o melhor botão, ou card possivel.
nesse mesmo cenário, o React é o garçom que recebe as comandas dos clientes e entrega pra cozinha, e consecutivamente, entrega o prato para o cliente.
Esse processo de entrega tem **3 passos importantes**

1. Ativando um render (triggering a render) -> (entregando o pedido do cliente para a cozinha)
2. Renderizando o componente (rendering the component) -> (preparando o pedido)
3. Enviando para o DOM (entregando o pedido pra o cliente)

## Primeiro passo - Trigger a render 

existem dois motivos para um componente sem renderizado

 1. é a primeira renderização do componente (initial render)
 2. O estado de um componente ou um dos seus "Ancestrais" foi atualizado. 

 ### render inicial
 quando seu app é iniciado, você precisa acionar o initial render. Isso é pode ser feito chamando o `Create root`, e apos isso você deve chamar seu método `render` junto ao seu componente. 

 ### re-rendering 

 uma vez que um componente é renderizado, você pode ativar renders futuros atualizando o seu estado com `set function`.
 da pra imaginar isso com o cliente do restaurante pedindo uma sobremesa, ou refri após ela pedir o prato principal. 
 
## Segundo passo - React renderizando seus componentes 

depois de ativar um rendering, o React chama seus componentes para descobrir qual deles mostrar na tela. "Rendering" é basicamente o React chamando seus componentes.

1. No render inicial, o React vai chamar o Componente Root
2. para renders futuros, React ira chamar seus componentes cujo estado atualizados ativaram um render.

esse é um processo **recursivo**, se o componente atualizado retorna outro componente, React ira atualizar esse componente consecutivamente, e se esse componente retornar alguma coisa, a mesma coisa acontece, e assim por diante. esse processo vai continuar até o React saber exatamente oque vai ser mostrado na tela.

## RENDERING SEMPRE DEVEM SER PUROS

1. mesmo input, mesmo output - Dado os mesmos inputs, o componente sempre deve retornar o mesmo output (Quando alguem pede uma salada de tomates, ela não espera receber uma salada de cebolas...)

1. ele cuida do seu próprio nariz - não deve mudar nenhum objeto ou variavel que existam antes do render (Um pedido não deve afetar outro pedido...)

caso contrario, tu pode acabar com Bugs e coisas insuportaveis de se resolver. e quanto mais seu código aumentar, mais chato e menos manutenivel ele vai ficar!👌

## Terceiro passo - React enviando mudanças para o DOM 

*depois de renderizar seus componentes, o React vai modificar o DOM*

no render inicial, React ira usar  `appendChild()` DOM API para colocar tudo que ele criou na tela.

para re-renders, React ira usar o minimo de operações necessarias para fazer o DOM combinar com o ultimo rendering

### o react só vai mudar o DOM se existir uma diferença entre os renders. 

#### após a renderizaração terminar e o React atualizar o DOM, o browser vai "repintar" a tela da sua própria maneira.
