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

// creo le thumbnails in modo dinamico
const thumbContainer = document.querySelector(".thumbnails");

objectContent.forEach((element) => {
  let thumbImg = `<div class="thumb-img"><img src="${element.image}" alt="" /></div>`;
  thumbContainer.innerHTML += thumbImg;
});

//per dare la classe active ora ai singoli elementi li racchiudo prima in una variabile che genera un array grazie a getelementsbyclass
const allItems = document.querySelectorAll(".item");

// seleziono tutte le thumbnails dall html
const allThumb = document.querySelectorAll(".thumb-img");

// definisco un variabile per dare il unumero dell'indice alla quale viene aggiunta la classe active
let activeItem = 0;
//aggiungo la classe active al primo elemento perche la variabile è 0 quindi la classe andrà all'elemento con indice 0
allItems[activeItem].classList.add("active");
// aggiungo la classe selected thumb
allThumb[activeItem].classList.add("selected-thumb");

//recupero i bottoni per lo slide
const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");

// creo le funzioni per andare avanti e indietro nel carosello
function nextInterval() {
  if (activeItem < objectContent.length - 1) {
    allItems[activeItem].classList.remove("active"); //diciamo prima di rimuovere la classe active dall elemento corrente
    allThumb[activeItem].classList.remove("selected-thumb");
    activeItem++; //passiamo all'elemento successivo aggiungendo 1 alla variabile activeItem in modo da passare all'elemento successivo
    allItems[activeItem].classList.add("active"); //e poi naggiungiamo la classe item di nuovo e andrà sull'elemento successivo
    allThumb[activeItem].classList.add("selected-thumb");
  } else if (activeItem === objectContent.length - 1) {
    // creiamo il ciclo infinito in modo da non bloccare mai il carosello
    allItems[activeItem].classList.remove("active"); // ritogliamo la classe
    allThumb[activeItem].classList.remove("selected-thumb");
    activeItem = 0; // active item ritorna 0
    allItems[activeItem].classList.add("active"); // e ricomincia ad aggiungere le classi
    allThumb[activeItem].classList.add("selected-thumb");
  }
}

function prevInterval() {
  if (activeItem > 0) {
    allItems[activeItem].classList.remove("active"); //diciamo prima di rimuovere la classe active dall elemento corrente
    allThumb[activeItem].classList.remove("selected-thumb");
    activeItem--; //passiamo all'elemento precedente togliendo 1 alla variabile activeItem in modo da passare all'elemento precedente
    //e poi naggiungiamo la classe item di nuovo e andrà sull'elemento precedente
    allItems[activeItem].classList.add("active");
    allThumb[activeItem].classList.add("selected-thumb");
  } else if (activeItem === 0) {
    // se active item è uguale a 0
    allItems[activeItem].classList.remove("active"); // rimuovo la classe
    allThumb[activeItem].classList.remove("selected-thumb");
    activeItem = objectContent.length - 1; // activeitem diventa quanto la lunghezza dell array meno 1 quindi 4 in questo caso
    allItems[activeItem].classList.add("active"); // riaggiungo la classe
    allThumb[activeItem].classList.add("selected-thumb");
  }
}

//aggiungiamo l'evento al click della freccia next per scorrere le immagini avanti
next.addEventListener("click", function () {
  nextInterval();
});

//creo un evento al click della freccia prev per tornare indietro con le immagini indietro
prev.addEventListener("click", function () {
  prevInterval();
});

// Aggiungo l'evento click alle thumbnails
allThumb.forEach((thumb, index) => {
  thumb.addEventListener("click", function () {
    allItems[activeItem].classList.remove("active"); // Rimuovo la classe active dall'elemento corrente
    allThumb[activeItem].classList.remove("selected-thumb");
    activeItem = index; // Aggiorno l'indice attivo con quello della thumbnail cliccata
    allItems[activeItem].classList.add("active"); // Aggiungo la classe active al nuovo elemento
    allThumb[activeItem].classList.add("selected-thumb"); // Aggiungo la classe selected-thumb alla nuova thumbnail
  });
});

// ***************************************
// recupero i bottoni per gestire gli intervalli
const startBtn = document.querySelector(".start-button");
const stopBtn = document.querySelector(".stop-button");
const reverseBtn = document.querySelector(".reverse-button");

// variabili per funziontalità autoplay
let autoplay;
let going = false;
let reverse = false;

// al click di start parte il ciclo corrente  se premo stop di ferma se premo reverse si cambia il ciclo e passa all'altro

// funzione per iniziare l'intervallo in avanti o indietro
function startInterval() {
  clearInterval(autoplay); // pulisce qualsiasi intervallo attivo
  if (reverse === true) {
    autoplay = setInterval(prevInterval, 2000);
  } else {
    autoplay = setInterval(nextInterval, 2000);
  }
}

// gestione del click su start
startBtn.addEventListener("click", function () {
  if (going === false) {
    startInterval();
    going = true;
  }
});

// gestione del click su stop
stopBtn.addEventListener("click", function () {
  if (going === true) {
    clearInterval(autoplay);
    going = false;
  }
});

// gestione del click su reverse
reverseBtn.addEventListener("click", function () {
  if (going === true || going === false) {
    // Cambia la direzione e riavvia l'intervallo
    reverse = !reverse;
    startInterval();
  }
});
// ***************************************
