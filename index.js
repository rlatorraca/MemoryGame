// Main JS File
function onLoad() {
    //console.log(` Loading screen ...`, Screen, MemoryGame)
    // const hero = {
    //     // always related with index.html
    //     img: './icons/batman.png',
    //     name: 'batman'
    // }

    // const code = Screen.returnHtmlCode(hero);
    // Screen.changeHtmlContent(code);

    const dependencies = {
        screen: Screen // Glonal Class Screen
    }

    // Initialize the memory game
    const memorygame = new MemoryGame(dependencies);
    memorygame.inicializar()



}

window.onload = function () {
    onLoad();
}