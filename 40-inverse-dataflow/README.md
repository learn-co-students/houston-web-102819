# Inverse Dataflow

### Learning Goals
- Changing state in a parent component
- Declaratively updating state

### Vocabulary
* Component hierarchy
    * The tree of components (who renders who)
* Parent Component
    * The component that renders _this_ component
* Inverse dataflow
    * Sending data back up the component tree through callbacks

### Component Hierarchy

* App
    * state
        * cars[]
    * children
        * CarList
            * props: 
                * cars[] 
            * children
                * CarCard
                    * props 
                        * car
        * EditCar
            * state
                * car

* App
    * handleSubmit
    * state
        * dragons[]
    * children
        * DragonCard []
            * props
                * dragonName
                * dragonImage
            * children
                * Title
                    * props
                        * name
        * DragonForm
            * props
                * handleSubmit
            * state
                * newDragonImage
                * newDragonName
