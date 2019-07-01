# THE RECYCLER

## Description
El juego consiste en que al "jugador" se le encomienda reciclar la máxima cantidad posible de residuos para miniminar el impacto ambiental.
Durante el juego van apareciendo diferentes tipos de residuos a los que se debe de acercar para luego llevarlo al contenedor.
Para esto, el jugador dispondrá de un tiempo, sino lo hace en el tiempo establecido pierde una de sus 3 vidas. Cada vez que recicla gana puntos
- Gana el jugo si: atrapa un total de 3 residuos 
- Pierde el juego si: falla 3 veces


## MVP (CANVAS y Manipulación DOM)
- Pantalla de inicio del juego
- "El jugador" se va moviendo por la pantalla para coger un residuo, el cuál recicla acercándose al contenedor.
- Si lo hace bien suma 5 puntos, sino pierde 1 vida
- Pantalla de volver a comenzar


## Backlog
- Hacer el Score y mostrarlas
- Añadir fondo que se mueva
- Añadir un laberinto
- Varios tipos de productos a reciclar
- Añadir oportunidades (3)
- Varios contenedores 
- Reciclar de acuerdo al tipo de producto en el contenedor correcto. 
- Guardar histórico de puntuaciones y mostrarla al usuario cuando se acabe juego
- Niveles
- Dos jugadores


## Data structure
Classes and methods definition.

### Clase Juego
Esta clase se encarga de la lógica del juego
Propiedades
- estados
Métodos
- getEstado()
- setEstado()


### Jugador
Esta clase representa al jugador, quién es el responsable de reciclar los productos que aparezcan en la pantalla

Propiedades
velocidad -> dada por los niveles (habrán 3)
puntos -> el acumulado de sus puntos

Métodos
- moverArriba()
- moverAbajo()
- moverIzquierda()
- moverDerecha()


### Residuos
Representan los elementos que se han de reciclar
Propiedades:
- tipoResiduo -> pueden ser: vidrio | orgánico | papel | plástico
Métodos:
- puntos() -> cada residuo reciclado dará diferentes puntos


### Contenedores
Representan los contenedores a dónde se tienen que acercar los residuos
Propiedades: Pueden ser de los tipos: vidrio | orgánico | papel | plástico


## States y States Transitions
Definition of the different states and their transition (transition functions)
- splashScreen: que muestre un botón "Start" para dar inicio al juego
- gameScreen: en dónde aparecerán un score en la esquina superior izquierda, el nombre del jugador en la esquina superior derecha y en el centro de la pantalla aparecerán productos para reciclar, el cubo de reciclaje y el jugador,
- gameoverScreen: Se reulitiza el html de la pantalla de inicio, cambiando el texto del botón Start por "volver a jugar"
- winScreen: Se reulitza el html para mostrar el jugador y el score acumulado.


## Links
### Trello
https://trello.com/b/rm6YR6TN/game-the-recycler


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/sophiahelena/recycler)
[Link Deploy](https://sophiahelena.github.io/recycler/)


### Slides
https://docs.google.com/presentation/d/1ZxNtWX5AqJLoORlxemqPcoU4aA2oFBTKmB-HRbrg_rE/edit?usp=sharing

