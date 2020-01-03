// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


let cardsContainer = document.querySelector(".cards-container");
let topic = document.querySelector(".topics");


axios
    .get("https://lambda-times-backend.herokuapp.com/articles")   // Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles

    .then(response => { 
        console.log (response);       // TEST 

        let article = response.data.articles;

        console.log (article);                  // TEST 

        let keys = Object.keys(article)     
            topic.addEventListener("click", (event) => {                             //click

                while (cardsContainer.firstChild) {
                    cardsContainer.removeChild(cardsContainer.firstChild);
                  }
                
                for (var item in article) {
                    let eachitem = article[item];
                    let className = event.target.classList[1];

                if (className == item){
                    for (let i = 0; i < eachitem.length; i++){
                    cards(eachitem[i]);
                cardsContainer.appendChild(cards(eachitem[i]));

            }
        }
                if (className == "ALL"){
                    for (let i = 0; i < eachitem.length; i++){
                    cards(eachitem[i]);
                    cardsContainer.appendChild(cards(eachitem[i]));
                }
    }       
    }})
})


function cards(obj) {               //fuction

    console.log(obj);

    const card = document.createElement("div");
        card.classList.add("card");
        
    const headline = document.createElement("div");
        headline.classList.add("headline");
        card.appendChild(headline);
        headline.textContent = obj.headline;


    const author = document.createElement("div");
        author.classList.add("author");
        card.appendChild(author);

    const imgCotainer = document.createElement("div");
        imgCotainer.classList.add("img-container");
        author.appendChild(imgCotainer);

    const image = document.createElement("img");
        imgCotainer.appendChild(image);
        image.src = obj.authorPhoto;
                    
    const authorName = document.createElement("span");
        author.appendChild(authorName);
        authorName.textContent = obj.authorName;

        return card;

                }