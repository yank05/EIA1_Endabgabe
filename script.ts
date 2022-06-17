//Function für laden der Screens bei jeweiliger Auswahl der Stufe
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
const sentence1 = {
    translation: "Mir geht es gut",
    word1: "Yo",
    word2: "soy",
    word3: "así",
    wordCount: 3,
}

//wechselt Interface
function LoadLevels(): void {
    //Entfernung aller Startseitenanzeigen
    MainPageInterface.Logo.remove(); 
    MainPageInterface.Subclaim.remove(); 
    MainPageInterface.language.remove(); 
    MainPageInterface.button1.remove(); 
    MainPageInterface.button2.remove(); 
    MainPageInterface.button3.remove();
    
    //Erstellung der Überschrift
    let Text1 = document.createElement("h2");
    Text1.setAttribute("id", "translationHeader");
    Text1.innerHTML = "Auf deutsch:";
    document.getElementById("content").appendChild(Text1); 

    //Erstellung der Aufforderung
    let Text2 = document.createElement("h3"); 
    Text2.setAttribute("id", "taskText"), 
    Text2.innerHTML = "Wähle die übersetzten Wörter in der richtigen Reihenfolge";
    document.getElementById("content").appendChild(Text2); 

    //Erstellung des Feldes mit der deutschen Übersetzung 
    let translationGerman = document.createElement("div");
    translationGerman.setAttribute("id", "translationGerman");
    translationGerman.innerHTML = sentence1.translation; 
    document.getElementById("content").appendChild(translationGerman); 

}

