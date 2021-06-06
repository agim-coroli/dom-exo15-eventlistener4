// 1. Met un écouteur d'événement sur le h1, rajoute la class text-error
let un = document.querySelector("h1")
un.classList.add("text-error")

// 2. Au double clique du h3, la class text-error
let deux = document.querySelector("h3")
let fonct1 = () => {
    deux.classList.add("text-error")
}
deux.addEventListener("dblclick", fonct1)

// 3. Ajoute la class text-style, quand on clique sur le paragraphe, trouve une methode qui retire la class si elle est déjà sur le paragraphe
let trois = document.querySelector("p")
let fonct2 = () => {
    if (trois.classList == ("text-style")) {
        trois.classList.remove("text-style")
    } else {
        trois.classList.add("text-style")
    }
}
trois.addEventListener("click", fonct2)

// 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
let quatre = document.querySelectorAll("p")[1].firstChild
let fonct3 = () => {
    quatre.classList.add("bolder")
}

quatre.addEventListener("click", fonct3)

// 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !
let cinq = document.querySelectorAll("p")[2].firstElementChild
let fonct4 = () => {
    cinq.classList.add("bolrder-red")
    if (cinq.classList == "bolrder-red" || ) {
        
    }
}

cinq.addEventListener("click", fonct4)


// CORRECTION 
//1
// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-error
let monH1 = document.querySelector("h1");

monH1.addEventListener("click",()=>{
    monH1.setAttribute("class","text-error")
})
// ### 2. Au double clique du h3, rajoute la class text-error

let monH3 = document.querySelector("h3");

monH3.addEventListener("dblclick", ()=>{
    monH3.setAttribute("class","text-error");
})

// ### 3. Ajoute la class text-style, quand on clique sur le paragraphe, trouve une methode qui retire la class si elle est déjà sur le paragraphe
let p = document.querySelector("p");
p.addEventListener("click", ()=>{
    p.classList.toggle("text-style")
});

// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique
let spanP2 = Array.from(p.nextElementSibling.children);
/* console.log(spanP2); */
spanP2.forEach(element => {
    element.addEventListener("click", ()=>{
        element.setAttribute("class", "bolder")
    });
});
// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !


let span=document.querySelectorAll("p")[2].children;
console.log(span);
let tabSpan=Array.from(span);

tabSpan[0].addEventListener("click",()=>{
    tabSpan[0].setAttribute("class","bolder-red")
    tabSpan[1].classList.remove("bolder-red");
    tabSpan[2].classList.remove("bolder-red")
})

tabSpan[1].addEventListener("click",()=>{
    tabSpan[1].setAttribute("class","bolder-red")
    tabSpan[0].classList.remove("bolder-red");
    tabSpan[2].classList.remove("bolder-red")
    
})

tabSpan[2].addEventListener("click",()=>{
    tabSpan[2].setAttribute("class","bolder-red")
    tabSpan[1].classList.remove("bolder-red");
    tabSpan[0].classList.remove("bolder-red")
})







