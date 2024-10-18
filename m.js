let BASE_URL = "https://www.omdbapi.com/?apikey=63d86761&s="
let firstBg = document.querySelector(".first-bg");
let row = document.querySelector(".row");
let row1 = document.querySelector(".row1");
let row2 = document.querySelector(".row2");
let background = document.querySelector(".background-image");
let price = document.querySelector(".price");
const movie = ["https://www.youtube.com/watch?v=lZkYH4ZIV88&ab_channel=AhmadAli", "https://www.youtube.com/watch?v=aLzeBYjYE9g&ab_channel=HollywoodExpress", "https://www.youtube.com/watch?v=RBQamFajUSU&ab_channel=MzaaloCineplex", "https://www.youtube.com/watch?v=5UTmN8jPJS0&ab_channel=Obsessions", "https://www.youtube.com/watch?v=wypHNa9cbnQ&ab_channel=FullHDvideos4me"];

const t = document.getElementById("title");
let navlist = document.querySelector(".nav-list");




const btn = document.querySelector("#search");

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let input = document.querySelector("#in");
    let inVal = input.value;

    const URL = `${BASE_URL}${inVal.toLowerCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
    // console.log(data.Search[0].Title);

    // call the new function to clear reamining tags here
    thor();
    big();
    clearSearch();
    myFunction(data);
    // myUniqueId();
    
});

// new function here
// find elements with a unique ID
// Remove this div
function clearSearch(){
    let div = document.getElementById("someId");
    if(div !== null) {
        document.getElementById("someId").remove();
    }
        
}

function thor (){
    if(firstBg !== null){
        firstBg.remove();
        if(row !== null){
            row.remove();
        }
        if(row1 !== null){
            row1.remove();
        }
        if(row2 !== null){
            row2.remove();
        }
        if(price !== null){
            price.remove();
        }
        
    }
}

function big(){
    if(background !== null){
        background.remove();
    }
    
}

navlist.addEventListener('click', () => {
    console.log(navlist);
})

function myFunction(data) {
    console.log(data);
    const searchResult = document.createElement("div");
    searchResult.setAttribute('id', "someId");
    document.body.appendChild(searchResult);
    for (let i = 0; i < data.Search.length; i++) {
        // Give  an ID to this div, so that, you will be able to remove this element.
        const div = document.createElement("div");
        
        div.classList.add("column");
        // div.setAttribute('id');

        let img = document.createElement('img');
        img.src = data.Search[i].Poster;
        img.classList.add('movie-img')
        div.appendChild(img);
        const title1 = document.createElement("div");
        title1.classList.add('title');
        // onclick = "playMovie";
        // title1.addEventListener("click");
        // console.log(title1);
        const name = document.createElement("div");
       
        // name.setAttribute('id', "title");
        
        // name.innerText = data.Search[i].Title;
        name.innerText = data.Search[i].Year;
        title1.appendChild(name);
        const view = document.createElement("a");
        let link = document.createTextNode(data.Search[i].Title);
        view.appendChild(link)
        let randomMovieLink = movie[(Math.floor(Math.random() * movie.length))]
        view.href = randomMovieLink;
        view.title = data.Search[i].Title;
        view.target = "blank";
        // view.innerText = data.Search[i].Title;

        view.classList.add('name');
        title1.appendChild(view);
        div.appendChild(title1);
        searchResult.appendChild(div);

    }
}