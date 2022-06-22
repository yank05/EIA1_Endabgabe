//Funktion für Laden der Screens bei jeweiliger Auswahl der Stufe
document.getElementById("b1").addEventListener("click", LoadLevels);

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
const MainPageObjects: MainPage = {
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
    word1: string;
    word2: string;
    word3: string;
    word4: string;
    word5: string; 
}

const sentences= []; 
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
function LoadLevels(): void {
    //Entfernung aller Startseitenanzeigen
    MainPageObjects.Logo.remove(); 
    MainPageObjects.Subclaim.remove(); 
    MainPageObjects.language.remove(); 
    MainPageObjects.button1.remove(); 
    MainPageObjects.button2.remove(); 
    MainPageObjects.button3.remove();

    //Erstellung der Aufforderung
    let Text2 = document.createElement("h3"); 
    Text2.setAttribute("id", "taskText"), 
    Text2.innerHTML = "Wähle die übersetzten Wörter in der richtigen Reihenfolge";
    document.getElementById("content").appendChild(Text2); 

    //Zufallsgenerator welcher Satz kommt
    let minSentence: number = 0;
    let maxSentence: number = 2; 
    let randomSentenceSelector: number = Math.floor(Math.random() * (maxSentence - minSentence + 1)) + minSentence;

    //Erstellung des Feldes mit der deutschen Übersetzung 
    let translationGerman: HTMLElement = document.createElement("div");
    translationGerman.setAttribute("id", "translationGerman");
    translationGerman.innerHTML = sentences[randomSentenceSelector].translation; 
    document.getElementById("content").appendChild(translationGerman); 

    //Zufallsgenerator wo welches Wort steht 
    // Wort 1
    let minWord: number = 1;
    let maxWord1: number = sentences[randomSentenceSelector].WordNumber; 
    let randomWord1: number = Math.floor(Math.random() * (maxWord1 - minWord + 1)) + minWord;
    //Wort 2
    let maxWord2: number = sentences[randomSentenceSelector].WordNumber; 
    let randomWord2: number = Math.floor(Math.random() * (maxWord2 - minWord + 1)) + minWord;
    //Wort 3
    let maxWord3: number = sentences[randomSentenceSelector].WordNumber; 
    let randomWord3: number = Math.floor(Math.random() * (maxWord3 - minWord + 1)) + minWord;
    //Wort 4
    let maxWord4: number = sentences[randomSentenceSelector].WordNumber; 
    let randomWord4: number = Math.floor(Math.random() * (maxWord4 - minWord + 1)) + minWord; 

      //Prüfen: Falls zwei Zahlen gleich sind, würde zwei mal das gleiche Wort erscheinen, sodass eine andere Zahl her muss
    while (randomWord1 == randomWord2) {
        randomWord2 = Math.floor(Math.random() * (maxWord2 - minWord + 1)) + minWord;
        console.log("Test"); 
    }
    while (randomWord1 == randomWord3 || randomWord2 == randomWord3) {
        randomWord3 = Math.floor(Math.random() * (maxWord3 - minWord + 1)) + minWord;
        console.log("Test")
    }

    let textWord1: string = "word" + randomWord1; 
    let textWord2: string = "word" + randomWord2;
    let textWord3: string = "word" + randomWord3; 
    let textWord4: string = "word" + randomWord4;
   
    console.log(textWord1); 
    console.log(textWord2);
    console.log(textWord3);
    console.log(textWord4);

    
}; 

    
