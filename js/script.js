//Variabler
const main = document.querySelector("main"); //forældre til .stage 
const stages = document.querySelectorAll(".stage");
const billede = document.querySelectorAll(".stage .billede");
const btns = document.querySelectorAll(".stage .btn"); 

//Funktion, der skal opdatere UI
const updateUI= (h2Text, pText, btnsText, imgPath) => {
    const section = document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active");

    const h2 = document.createElement("h2");
    h2.textContent = h2Text; 
    section.append(h2);


    if(imgPath != undefined) {
        const img = document.createElement("img");
        img.src = imgPath; 
        section.append(img);
    }

    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p);


    btnsText.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", nextStage);
        section.append(button);
    })


    //Sæt ny section ind i main
    main.replaceChildren(section);
}

//Funktion, der skal finde frem til, hvad der skal vises
const nextStage = (e) => {
    console.log(e.target.textContent);
    let h2Text, pText, btnsText, imgPath;
    switch(e.target.textContent) {
        case "Start": 
           h2Text = "Du starter på et nyt semester og skal oprette login til skolens platform. Hvilket password vælger du?";
           pText = "Et password baseret på dit studie og et årstal – nemt at huske, fordi det er personligt, som fx: “Studie2026”. Eller et komplekst password med bogstaver, tal og symboler, som fx: “T!k9#Lp2$z”";
           btnsText = ["“Studie2026”", "“T!k9#Lp2$z”"];
        break;
        case "“Studie2026”": 
           h2Text = "Du har valgt et password, der er baseret på noget personligt og genkendeligt, som fx: “Studie2026”. Dette password er nemt at huske, fordi det tager udgangspunkt i din hverdag – fx dit studie og et årstal.Men passwords med almindelige ord og mønstre kan stadig være relativt nemme at gætte eller bryde.Det giver en vis sikkerhed, men er ikke det stærkeste valg. I løbet af dagen skal du også logge ind på din mail og andre services. Vil du bruge det samme password flere steder?";
           pText = "Ja - Jeg bruger det samme password, fordi det er nemmere at huske og hurtigere at logge ind med. Eller Nej - Jeg bruger forskellige passwords, så mine konti ikke er afhængige af det samme login.";
           btnsText = ["Ja", "Nej"];
        break;
        case "“T!k9#Lp2$z”": 
           h2Text = "Du har valgt et komplekst password med en blanding af bogstaver, tal og symboler, som fx:“T!k9#Lp2$z” . Dette password er svært at gætte, fordi det ikke følger et tydeligt mønster.Det giver en høj grad af sikkerhed, men kan også være sværere at huske uden hjælp. I løbet af dagen skal du også logge ind på din mail og andre services. Vil du bruge det samme password flere steder?";
           pText = "Ja - Jeg bruger det samme password, fordi det er nemmere at huske og hurtigere at logge ind med. Eller Nej - Jeg bruger forskellige passwords, så mine konti ikke er afhængige af det samme login.";
           btnsText = ["ja", "nej"];
        break;
        case "Ja": 
           imgPath = "img/detskalvikiggepå.jpg"; 
           pText = "Du har valgt at bruge det samme password flere steder, samtidig med du har valgt et password som fx: “Studie2026”, der er baseret på noget personligt og derfor er nemt at huske. Selvom passwordet ikke er helt simpelt, kan det stadig være muligt at gætte eller bryde, fordi det indeholder almindelige ord og mønstre, og når du samtidig genbruger det, øger du risikoen for, at flere konti bliver kompromitteret, hvis én bliver udsat for et angreb. Kombinationen gør din sikkerhed moderat, men stadig sårbar.";
           btnsText = ["Prøv igen"];
        break;
        case "Nej": 
           imgPath = "img/pladstilforbedring.jpg"; 
           pText = "Du har valgt at bruge forskellige passwords på dine konti, hvilket er et rigtig godt valg. Samtidig har du valgt et password som fx: “Studie2026”, der er baseret på noget personligt og derfor er nemt at huske. Selvom passwordet ikke er det stærkeste og stadig kan være muligt at gætte eller bryde, har du begrænset risikoen for, at flere konti bliver kompromitteret samtidig. Det kræver lidt mere at holde styr på flere passwords, men det øger din sikkerhed markant, fordi dine konti ikke deler samme loginoplysninger. Kombinationen gør din sikkerhed bedre, men den kan stadig forbedres ved at vælge stærkere passwords..";
           btnsText = ["Prøv igen"];
        break;
         case "ja": 
           imgPath = "img/godtpåvej.jpg"; 
           pText = "Du har valgt at bruge det samme password flere steder. Men selvom du har valgt at bruge et komplekst password som fx: “T!k9#Lp2$z”, som er et stærkt password i sig selv, så kan det at genbruge stadig udgøre en risiko.Hvis én tjeneste bliver kompromitteret, kan dine loginoplysninger stadig blive misbrugt på andre platforme. Du har høj sikkerhed, men genbrug svækker den samlede beskyttelse.";
           btnsText = ["Prøv igen"];
        break;
        case "nej": 
           h2Text = "Du har valgt at bruge et stærkt password og forskellige passwords på dine konti. Det er et sikkert valg, men det betyder også, at du nu skal holde styr på flere komplekse passwords i din hverdag, hvilket er nærmest umuligt. Hvordan vil du huske dem?"; 
           pText = "Jeg skriver mine passwords ned. Jeg gemmer dem i noter på min computer eller skriver dem ned et sted. Jeg lader min computer huske dem. Jeg gemmer mine passwords i browseren, så de bliver udfyldt automatisk. Jeg bruger en password manager. Jeg gemmer mine passwords i et program, der er lavet til sikker opbevaring.";
           btnsText = ["Valg 1", "Valg 2","Valg 3"];
        break;
          case "Valg 1": 
           imgPath = "img/godtpåvej.jpg"; 
           pText = "Du har valgt et stærkt password og bruger forskellige passwords på dine konti – rigtig godt valg. For at kunne huske dem har du valgt at skrive dem ned. Det er en forståelig løsning, da komplekse passwords kan være svære at huske. Dog afhænger sikkerheden af, hvordan de opbevares. Hvis andre får adgang til dine noter, kan dine passwords stadig blive kompromitteret. Du er godt på vej, men din løsning kan gøres mere sikker.";
           btnsText = ["Prøv igen"];
        break;
         case "Valg 2": 
           imgPath = "img/godtpåvej.jpg"; 
           pText = "Du har valgt et stærkt password og bruger forskellige passwords – rigtig godt. Ved at lade din computer huske dem gør du det nemmere at bruge sikre passwords i hverdagen, hvilket mange ellers har svært ved. Sikkerheden afhænger dog af din enhed. Hvis andre får adgang til din computer, kan dine passwords også være i risiko. Det er en god og praktisk løsning, hvis din enhed er beskyttet.";
           btnsText = ["Prøv igen"];
        break;
         case "Valg 3": 
           imgPath = "img/rigtiggodtvalg.jpg"; 
           pText = "Du har valgt et stærkt password og bruger forskellige passwords – rigtig godt valg. Ved at bruge en password manager gør du det nemt at håndtere komplekse passwords, som ellers kan være svære at huske. Det betyder, at du både beskytter dine konti og begrænser konsekvenserne, hvis én bliver kompromitteret. Det er en af de mest sikre og realistiske løsninger i din studiehverdag.";
           btnsText = ["Prøv igen"];
        break;
         
        case "Prøv igen":
        return location.reload();
        break; 
       

        default: console.log("Error");
    }
    updateUI(h2Text, pText, btnsText, imgPath);
}

for(const btn of btns) {
    btn.addEventListener("click", nextStage)
}


