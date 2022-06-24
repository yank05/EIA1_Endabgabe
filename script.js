//Funktion für Laden der Screens bei jeweiliger Auswahl der Stufe
document.getElementById("b1").addEventListener("click", LoadLevels);
const MainPageObjects = {
    AppName: document.getElementById("appTitleText1"),
    Logo: document.getElementById("appTitleLogo"),
    Subclaim: document.getElementById("appTitleText2"),
    language: document.getElementById("appTitleText3"),
    button1: document.getElementById("b1"),
    button2: document.getElementById("b2"),
    button3: document.getElementById("b3"),
};
const sentences = [];
sentences[0] = {
    translation: "Mir geht es gut",
    words: ["yo", "soy", "asi"],
};
sentences[1] = {
    translation: "Es ist sehr warm heute",
    words: ["hace", "mucho", "calor", "hoy"]
};
sentences[2] = {
    translation: "Die Rechnung bitte",
    words: ["La", "cuenta", "por", "favor"]
};
//wechselt Interface
function LoadLevels() {
    //Entfernung aller Startseitenanzeigen
    MainPageObjects.Logo.remove();
    MainPageObjects.Subclaim.remove();
    MainPageObjects.language.remove();
    MainPageObjects.button1.remove();
    MainPageObjects.button2.remove();
    MainPageObjects.button3.remove();
    //Erstellung der Aufforderung, was zu tun ist
    let Text2 = document.createElement("h3");
    Text2.setAttribute("id", "taskText"),
        Text2.innerHTML = "Wähle die übersetzten Wörter in der richtigen Reihenfolge";
    document.getElementById("content").appendChild(Text2);
    //Zufallsgenerator welcher Satz als erstes erscheinen wird
    let minSentence = 0;
    let maxSentence = 2;
    let randomSentenceSelector = Math.floor(Math.random() * (maxSentence - minSentence + 1)) + minSentence;
    //Erstellung des Feldes mit der deutschen Übersetzung 
    let translationGerman = document.createElement("div");
    translationGerman.setAttribute("id", "translationGerman");
    translationGerman.innerHTML = sentences[randomSentenceSelector].translation;
    document.getElementById("content").appendChild(translationGerman);
    //Erstellung der Flexbox mit den Wörtern 
    let FlexWords = document.createElement("div");
    FlexWords.setAttribute("id", "flexwords");
    document.getElementById("content").appendChild(FlexWords);
    //initiale Festlegung der Variable, wie lange die for-Schleife laufen soll, weil sich die Array.length in der for-Schleife
    //ändert und sie sonst zu früh enden würde
    var initialArrayLenght = sentences[randomSentenceSelector].words.length;
    //Erstellung der Buttons
    for (let index = 0; index < initialArrayLenght; index++) {
        //zufälliges Wort aus dem Array "words" des jeweiligen Satzes. Die Stelle des Arrays, die der Zufallsgenerator wählt,
        //wird als Button erstellt und anschließend aua dem Array gelöscht, sodass der Zufallsgenerator dieses Wort nicht mehr 
        //auswählt, sondern eines der restlichen existierenden Wörter
        let minWords = 0;
        let maxWords = (sentences[randomSentenceSelector].words.length - 1);
        let WordSelector = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
        //Element wird mit dem Wort erstellt
        let words = document.createElement("button");
        words.setAttribute("type", "button");
        words.setAttribute("id", "word" + index);
        words.innerHTML = sentences[randomSentenceSelector].words[WordSelector];
        document.getElementById("flexwords").appendChild(words);
        sentences[randomSentenceSelector].words.splice(WordSelector, 1);
    }
}
;
//# sourceMappingURL=script.js.map