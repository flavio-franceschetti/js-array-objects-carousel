// creo l'array con gli ogetti da implementare nel carosello
const objectContent = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// ***************************************
//prendo il container dove inserire i div con le immagini
const itemsContainer = document.querySelector(".items-container");

// con un forEach sull'array con le immaggini le inserisco nell html
objectContent.forEach((element) => {
  //creo la variabile con l'elemento html usando l variabile creata con gli elementi dell'array
  let itemContentImg = `<div class="item">
          <div class="item-text-content">
            <h3>${element.title}</h3>
            <p>${element.text}</p>
          </div>
          <img src="${element.image}" alt="img1" />
        </div>`;
  //inserisco l'html nel contenitore
  itemsContainer.innerHTML += itemContentImg;
});
// ***************************************

//per dare la classe active ora ai singoli elementi li racchiudo prima in una variabile
const allItems = document.getElementsByClassName("item");

let activeItem = 0;
//aggiungo la classe active al primo elemento
allItems[activeItem].classList.add("active");

//recupero i bottoni per lo slide
const next = document.querySelector(".next-btn");

//aggiungiamo l'evento al click della freccia next per scorrere le immagini
next.addEventListener("click", function () {
  //creiamo la condizione per verificare se siamo arrivati alla fine dell'array
  //ci sarà l' array.lengt - 1 perché lenght prende gli conta il totale ma gli elementi partono da 0
  if (activeItem < objectContent.length - 1) {
    //diciamo prima di rimuovere la classe active dall elemento corrente
    allItems[activeItem].classList.remove("active");
    //passiamo all'elemento successivo aggiungendo 1 alla variabile activeItem in modo da passare all'elemento successivo
    activeItem++;
    //e poi naggiungiamo la classe item di nuovo e andrà sull'elemento successivo
    allItems[activeItem].classList.add("active");
  }
});

const prev = document.querySelector(".prev-btn");

//creo un evento al click della freccia prev per tornare indietro con le immagini
prev.addEventListener("click", function () {
  if (activeItem > 0) {
    //diciamo prima di rimuovere la classe active dall elemento corrente
    allItems[activeItem].classList.remove("active");
    //passiamo all'elemento precedente togliendo 1 alla variabile activeItem in modo da passare all'elemento precedente
    activeItem = activeItem - 1;
    //e poi naggiungiamo la classe item di nuovo e andrà sull'elemento precedente
    allItems[activeItem].classList.add("active");
  }
});
