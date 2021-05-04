// Do the logical rules of the game
class MemoryGame {

    // if you send an OBJECT = { screen: 1, age: 10, job: Developer}
    // Function is going to ignore all other properties and return just scre
    constructor({ screen }) {
        this.screen = screen
        this.initialHero = [
            { img: './icons/batman.png', name: 'batman' },
            { img: './icons/captainAmerica.png', name: 'captainAmerica' },
            { img: './icons/cyclops.png', name: 'cyclops' },
            { img: './icons/flash.png', name: 'flash' },
            { img: './icons/hulk.png', name: 'hulk' },
            { img: './icons/ironMan.png', name: 'ironMan' },
            { img: './icons/spiderman.png', name: 'spiderman' },
            { img: './icons/thor.png', name: 'thor' },
        ]
    }

    // will building the context and load al dependencies
    inicializar() {
        // Put on the screen all heros

        this.screen.updateImages(this.initialHero)
    }

}