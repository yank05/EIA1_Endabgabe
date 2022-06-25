//Alle Elemente der Startseite als Objekt gespeichert
interface MainPage {
    AppName: HTMLElement;
    Logo: HTMLElement; 
    Subclaim: HTMLElement; 
    language: HTMLElement; 
    button1: HTMLElement; 
    button2: HTMLElement;
    button3: HTMLElement; 
}
const mainPageObjects: MainPage = {
    AppName: document.getElementById("appTitleText1"),
    Logo: document.getElementById("appTitleLogo"),
    Subclaim: document.getElementById("appTitleText2"),
    language: document.getElementById("appTitleText3"),
    button1: document.getElementById("b1"),
    button2: document.getElementById("b2"),
    button3: document.getElementById("b3"),
}; 

//Deklaration der Sätze
interface ArraySentences {
    sentences: object; 
}
interface Sentences {
    translation: string;
    words: string;
}

const sentences = []
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
    words: ["La", "cuenta", "por", "favor", "1", "2", "3", "4"]
}; 

//Variable für Punkte
var points: number = 0; 

//Funktion für Laden der Screens bei jeweiliger Auswahl der Stufe
document.getElementById("b1").addEventListener("click", Level1);
document.getElementById("b2").addEventListener("click", Level2);
document.getElementById("b3").addEventListener("click", Level3);

var indexLevel: number;  
function Level1(): void {
    indexLevel = 5; 
    LoadLevels(); 
}

function Level2(): void {
    indexLevel = 10; 
    LoadLevels(); 
}

function Level3(): void {
    indexLevel = 15; 
    LoadLevels();
}



//wechselt Seite
function LoadLevels(): void {
    //Entfernung aller Startseitenanzeigen
    mainPageObjects.Logo.remove(); 
    mainPageObjects.Subclaim.remove(); 
    mainPageObjects.language.remove(); 
    mainPageObjects.button1.remove(); 
    mainPageObjects.button2.remove(); 
    mainPageObjects.button3.remove();

    //Zufallsgenerator welcher Satz erscheinen wird
    let minSentence: number = 0;
    let maxSentence: number = (sentences.length -1);
    let randomSentenceSelector: number = Math.floor(Math.random() * (maxSentence - minSentence + 1)) + minSentence;

    //Erstellung des Feldes mit der deutschen Übersetzung 
    let translationGerman: HTMLElement = document.createElement("div");
    translationGerman.setAttribute("id", "translationGerman");
    translationGerman.innerHTML = sentences[randomSentenceSelector].translation; 
    document.getElementById("content").appendChild(translationGerman); 

    //Erstellung Flexbox, in welche die spanischen Wörter eingefügt werden
    let flexSpanish: HTMLElement = document.createElement("div");
    flexSpanish.setAttribute ("id", "flexspanish");
    document.getElementById("content").appendChild(flexSpanish); 
    
    //Erstellung der Aufforderung, was zu tun ist
    let text2: HTMLHeadElement = document.createElement("h3"); 
    text2.setAttribute("id", "taskText"), 
    text2.innerHTML = "Wähle die übersetzten Wörter in der richtigen Reihenfolge";
    document.getElementById("content").appendChild(text2); 

    //Erstellung der Flexbox mit den Wörtern 
    let flexWords: HTMLElement = document.createElement("div");
    flexWords.setAttribute("id", "flexwords");
    document.getElementById("content").appendChild(flexWords); 

    //Kopie des Arrays mit den Wörtern, damit diese nicht wirklich gelöscht werden
    var theArray = sentences[randomSentenceSelector].words.slice(); 

    for (let index: number = 0; index < sentences[randomSentenceSelector].words.length; index++) {
        //zufälliges Wort aus dem Array "words" des jeweiligen Satzes. Die Stelle des Arrays, die der Zufallsgenerator wählt,
        //wird als Button erstellt und anschließend aus dem Array gelöscht, sodass der Zufallsgenerator dieses Wort nicht mehr 
        //auswählt, sondern eines der restlichen existierenden Wörter
        let minWords: number = 0;
        let maxWords: number = (theArray.length - 1); 
        let wordSelector: number = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
        //Element wird mit dem Wort erstellt und die Flexbox eingesetzt
        let words: HTMLElement = document.createElement("button"); 
        words.setAttribute("type", "button"); 
        words.setAttribute("id", "word" + index); 
        words.innerHTML = theArray[wordSelector]; 
        document.getElementById("flexwords").appendChild(words); 
        //Wort wird aus dem Array gelöscht
        theArray.splice(wordSelector, 1); 
    }
    //Löschung des benutzten Satzes aus dem Array, dass er nicht nochmal kommt
    sentences.splice(randomSentenceSelector, 1); 
    console.log(indexLevel);    
}; 



