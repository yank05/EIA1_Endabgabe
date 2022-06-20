//Funktion für Laden der Screens bei jeweiliger Auswahl der Stufe
document.getElementById("b1").addEventListener("click", LoadLevels);
//Alle Elemente der Startseite als Objekt gespeichert
const MainPageInterface = {
    AppName: document.getElementById("appTitleText1"),
    Logo: document.getElementById("appTitleLogo"),
    Subclaim: document.getElementById("appTitleText2"),
    language: document.getElementById("appTitleText3"),
    button1: document.getElementById("b1"),
    button2: document.getElementById("b2"),
    button3: document.getElementById("b3"),
};
//Deklaration der Sätze
const sentences = [];
sentences[0] = {
    translation: "Mir geht es gut",
    word1: "yo",
    word2: "soy",
    word3: "así",
    WordNumber: 3,
};
sentences[1] = {
    translation: "Es ist sehr warm heute",
    word1: "hace",
    word2: "mucho",
    word3: "calor",
    word4: "hoy",
    WordNumber: 4,
};
sentences[2] = {
    translation: "Die Rechnung bitte",
    word1: "La",
    word2: "cuenta,",
    word3: "por",
    word4: "favor",
    WordNumber: 4,
};
//wechselt Interface
function LoadLevels() {
    //Entfernung aller Startseitenanzeigen
    MainPageInterface.Logo.remove();
    MainPageInterface.Subclaim.remove();
    MainPageInterface.language.remove();
    MainPageInterface.button1.remove();
    MainPageInterface.button2.remove();
    MainPageInterface.button3.remove();
    //Erstellung der Aufforderung
    let Text2 = document.createElement("h3");
    Text2.setAttribute("id", "taskText"),
        Text2.innerHTML = "Wähle die übersetzten Wörter in der richtigen Reihenfolge";
    document.getElementById("content").appendChild(Text2);
    //Zufallsgenerator welcher Satz kommt
    let minSentence = 0;
    let maxSentence = 2;
    let randomSentenceSelector = Math.floor(Math.random() * (maxSentence - minSentence + 1)) + minSentence;
    console.log(randomSentenceSelector);
    //Erstellung des Feldes mit der deutschen Übersetzung 
    let translationGerman = document.createElement("div");
    translationGerman.setAttribute("id", "translationGerman");
    translationGerman.innerHTML = sentences[randomSentenceSelector].translation;
    document.getElementById("content").appendChild(translationGerman);
    //Zufallsgenerator wo welches Wort steht 
    // Wort 1
    let minWord = 1;
    let maxWord1 = sentences[randomSentenceSelector].WordNumber;
    let randomWord1 = Math.floor(Math.random() * (maxWord1 - minWord + 1)) + minWord;
    //Wort 2
    let maxWord2 = sentences[randomSentenceSelector].WordNumber;
    let randomWord2 = Math.floor(Math.random() * (maxWord2 - minWord + 1)) + minWord;
    //Variable mit Zufallszahl + passenden Text sodass der Speicherort im Objekt des jeweiligen Satzes gefunden wird
    let textWord1 = "word" + randomWord1;
    let textWord2 = "word" + randomWord2;
    //Erstellung der spanischen Wörter
    //Wort 1
    let word1 = document.createElement("div");
    word1.setAttribute("class", "word1");
    word1.innerHTML = sentences[randomSentenceSelector].textWord1;
    document.getElementById("content").appendChild(translationGerman);
    console.log(textWord1);
    //Wort 2
    let word2 = document.createElement("div");
    word2.setAttribute("class", "word1");
    word2.innerHTML = sentences[randomSentenceSelector].textWord2;
    document.getElementById("content").appendChild(translationGerman);
    console.log(textWord2);
}
//# sourceMappingURL=script.js.map