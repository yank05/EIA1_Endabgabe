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
    words: ["La", "cuenta", "por", "favor"]
}; 
sentences [3] = {
    translation: "Wir fahren nach Madrid", 
    words: ["Nos", "vamos", "a", "madrid"]
};
sentences [4] = {
    translation: "Morgen ist der Urlaub leider schon vorbei", 
    words: ["Desafortunadamente,", "las", "vacaciones", "terminan", "mañana"]
};
sentences [5] = {
    translation: "Wie viel kostet das denn?", 
    words: ["¿Cuánto", "cuesta", "eso?"]
};
sentences [6] = {
    translation: "Es war sehr lecker, danke", 
    words: ["estuvo", "delicioso,", "gracias"]
};
sentences [7] = {
    translation: "Ich sprech ein bisschen spanisch", 
    words: ["Hablo", "un", "poco", "de", "español"]
};
sentences [7] = {
    translation: "ORIGAMI ist toll, um spanisch zu lernen", 
    words: ["ORIGAMI", "es", "genial", "para", "aprender", "español"]
};
sentences [8] = {
    translation: "Ich möchte auch etwas zu trinken", 
    words: ["yo", "tambien", "quiero", "algo", "de", "beber"]
}; 
sentences [9] = {
    translation: "Können sie das wiederholen, bitte?", 
    words: ["¿Podrías", "repetir", "eso", "por", "favor?"]
}; 
sentences [10] = {
    translation: "Ich komme aus Deutschland", 
    words: ["vengo", "de", "Alemania"]
}; 
sentences [11] = {
    translation: "Unser Flug geht um 15:45 Uhr", 
    words: ["Nuestro", "vuelo", "sale", "a", "las", "15:45."]
}; 
sentences [12] = {
    translation: "Morgen habe ich Zeit für dich", 
    words: ["mañana", "tengo", "tiempo", "para", "ti"]
}; 
sentences [13] = {
    translation: "Oh, das weiß ich gerade leider auch nicht", 
    words: ["Oh,", "yo", "tampoco", "lo", "sé", "ahora"]
}; 
sentences [14] = {
    translation: "Spanisch ist so eine schöne Sorache", 
    words: ["el", "español", "es", "un", "idioma", "tan", "hermoso"]
}; 



//Variable für Punkte
var points: number = 0; 
var pointViewer: HTMLElement = document.getElementById("points");
//Variable für zufälligen Satz
var randomSentenceSelector: number; 

//Funktion für Laden der Screens bei jeweiliger Auswahl der Stufe
document.getElementById("b1").addEventListener("click", Level1);
document.getElementById("b2").addEventListener("click", Level2);
document.getElementById("b3").addEventListener("click", Level3);


//Variable indexLevel gibt an, wie oft die Funktionen alle ausgeführt werden, bis die Stufe endet
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
    randomSentenceSelector = Math.floor(Math.random() * (maxSentence - minSentence + 1)) + minSentence;

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

    let cheater: HTMLElement = document.createElement("div");
    cheater.setAttribute("id", "cheater");
    document.getElementById("content").appendChild(cheater); 
    cheater.addEventListener("click", cheat);

    //Punkteanzeige
    pointViewer.innerHTML = "Punkte: " + points;

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
        //Event bei Klick auf das Wort wird hinzugefügt
        let eventer: HTMLElement = document.getElementById("word" + index);
        eventer.addEventListener("click", wordClicker); 
    }
}; 

var clickCounter: number = 0; 
function wordClicker(): void {
    //Click-Counter zählt, um den wievielten Klick es sich handelt, um dann zu ermitteln ob das Wort richtig ist
    clickCounter++;
    //Variable für die Div, in welches die Übersetzung soll
    let box: HTMLElement = document.getElementById("flexspanish");
    //Variable, für die Div, in welche die "Gut gemacht"-Meldung kommen soll
    let box2: HTMLElement = document.getElementById("flexwords");
    //handelt es sich um den ersten Klick, muss inner.HTML des Buttons im Array an 0. Stelle stehen, beim 2. Klick an 1. Stelle usw.
    if (clickCounter == 1 && this.innerHTML == sentences[randomSentenceSelector].words[0]) {
        //Sichtbarkeit des Feldes mit den ausgewählten Wörtern
        box.setAttribute("style", "opacity:1"); 
        //Eifügen des ausgewählten Wortes
        box.innerHTML = this.innerHTML; 
        //entfernen des ausgewählten Wortes
        this.remove();
        //Hochsetzen der Punktzahl
        points++; 
        //Ausgabe der Punktzahl
        pointViewer.innerHTML = "Punkte: " + points; 
    }
    else if (clickCounter == 2 && this.innerHTML == sentences[randomSentenceSelector].words[1]) {
        box.innerHTML = box.innerHTML + " " + this.innerHTML; 
        this.remove();
        points++;
        pointViewer.innerHTML = "Punkte: " + points;
    }
    else if (clickCounter == 3 && this.innerHTML == sentences[randomSentenceSelector].words[2]) {
        box.innerHTML = box.innerHTML + " " + this.innerHTML; 
        this.remove();
        points++;
        pointViewer.innerHTML = "Punkte: " + points;
    }
    else if (clickCounter == 4 && this.innerHTML == sentences[randomSentenceSelector].words[3]) {
        box.innerHTML = box.innerHTML + " " + this.innerHTML; 
        this.remove();
        points++;
        pointViewer.innerHTML = "Punkte: " + points;
    }
    else if (clickCounter == 5 && this.innerHTML == sentences[randomSentenceSelector].words[4]) {
        box.innerHTML = box.innerHTML + " " + this.innerHTML; 
        this.remove();
        points++;
        pointViewer.innerHTML = "Punkte: " + points;
    }
    else if (clickCounter == 6 && this.innerHTML == sentences[randomSentenceSelector].words[5]) {
        box.innerHTML = box.innerHTML + " " + this.innerHTML; 
        this.remove();
        points++;
        pointViewer.innerHTML = "Punkte: " + points;
    }
    else if (clickCounter == 7 && this.innerHTML == sentences[randomSentenceSelector].words[6]) {
        box.innerHTML = box.innerHTML + " " + this.innerHTML; 
        this.remove();
        points++;
        pointViewer.innerHTML = "Punkte: " + points;
    }
    else if (clickCounter == 8 && this.innerHTML == sentences[randomSentenceSelector].words[7]) {
        box.innerHTML = box.innerHTML + " " + this.innerHTML; 
        this.remove();
        points++;
        pointViewer.innerHTML = "Punkte: " + points;
    }
    //bei Fehler, Alert, ClickCounter runter, Punkte rundet und falls Punkte null sind bleiben sie null
    else {
    alert("Leider nicht richtig, versuch es nochmal!")
    clickCounter--; 
    points--;
    if (points <= 0) {
        points = 0; 
        }
    pointViewer.innerHTML = "Punkte: " + points;
    }
    
    //wenn so oft richtig geklickt wurde wie das words array lang ist sind alle Worte richtig ausgewählt
    if (clickCounter == sentences[randomSentenceSelector].words.length) {
        //Meldung mit Weiter button
        box2.innerHTML = "Gut gemacht!"; 
        let button: HTMLElement = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("id", "goonbutton"); 
        document.getElementById("flexwords").appendChild(button); 
        button.innerHTML = "Weiter";
        button.addEventListener("click", goOn); 
        //Entfernen des benutzten Satzes
        sentences.splice(randomSentenceSelector, 1); 
    }
}
//Aufbau der neuen Seite nach Schema oben 
function goOn(): void {
    indexLevel--; 
    if (indexLevel > 0) {
    let minSentence: number = 0;
    let maxSentence: number = (sentences.length -1);
    randomSentenceSelector = Math.floor(Math.random() * (maxSentence - minSentence + 1)) + minSentence;

    //neuer Satz auf deutsch
    let translationGerman: HTMLElement = document.getElementById("translationGerman");
    translationGerman.innerHTML = sentences[randomSentenceSelector].translation; 

    //Feld mit spanischer Übersetzung wird unsichtbar und geleert
    let flexSpanish: HTMLElement = document.getElementById("flexspanish");
    flexSpanish.setAttribute("style", "opacity:0"); 
    flexSpanish.innerHTML = ""; 

    //Entfernung des Weiter-Buttons und Leerung des Divs mit den Wörtern
    let button: HTMLElement = document.getElementById("goonbutton")
    button.remove();
    let box: HTMLElement = document.getElementById("flexwords");
    box.innerHTML = ""; 

    //Click-Counter wieder auf 0
    clickCounter = 0; 
    console.log(indexLevel); 


    //Erstellung der Wörter mit for-Schleife nach dem gleichen Schema wie oben
    var theArray = sentences[randomSentenceSelector].words.slice(); 

    for (let index: number = 0; index < sentences[randomSentenceSelector].words.length; index++) {
        let minWords: number = 0;
        let maxWords: number = (theArray.length - 1); 
        let wordSelector: number = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
        let words: HTMLElement = document.createElement("button"); 
        words.setAttribute("type", "button"); 
        words.setAttribute("id", "word" + index); 
        words.innerHTML = theArray[wordSelector]; 
        document.getElementById("flexwords").appendChild(words); 
        theArray.splice(wordSelector, 1); 
        let eventer: HTMLElement = document.getElementById("word" + index);
        eventer.addEventListener("click", wordClicker); 
    }
}
    else {
        //Seite clearen
        let pointsCorner: HTMLElement = document.getElementById("points");
        let translationGerman: HTMLElement = document.getElementById("translationGerman");
        let flexSpanish: HTMLElement = document.getElementById("flexspanish");
        let flexWords: HTMLElement = document.getElementById("flexwords"); 
        let taskText: HTMLElement = document.getElementById("taskText");
        pointsCorner.remove();
        translationGerman.remove();
        flexSpanish.remove();
        flexWords.remove();
        taskText.remove();

        let textField: HTMLElement = document.createElement("div");
        textField.setAttribute("id", "finalText");
        document.getElementById("content").appendChild(textField)

        let headText1: HTMLElement = document.createElement("h2");
        headText1.setAttribute("id", "headText1");
        headText1.innerHTML = "Geschafft!"; 
        document.getElementById("finalText").appendChild(headText1); 

        let headText2: HTMLElement = document.createElement("h3");
        headText2.setAttribute("id", "headText2");
        headText2.innerHTML = "Du hast " + points + " Punkte erreicht"; 
        document.getElementById("finalText").appendChild(headText2); 

        let headText3: HTMLElement = document.createElement("h3");
        headText3.setAttribute("id", "headText3");
        headText3.innerHTML = "Da geht noch was, oder?";
        document.getElementById("finalText").appendChild(headText3); 

        let againButton: HTMLElement = document.createElement("button");
        againButton.setAttribute("type", "button");
        againButton.setAttribute("id", "againButton");
        againButton.innerHTML = "Zur Startseite";
        againButton.addEventListener("click", reload);
        document.getElementById("finalText").appendChild(againButton); 

    }
}

function reload(): void {
    location.reload(); 
}

function cheat(): void {
    indexLevel = 1; 
}
