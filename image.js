const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";


let input = document.querySelector("#scr-input")
let srcbtn = document.querySelector("#srcbtn")
let showresults = document.querySelector(".showresults")
let ShowMore = document.querySelector("#ShowMore")

let inputdata= "";
let page =1;

async function getSrc() {
    inputdata = input.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`;
    let response = await fetch(url)
    let data = await response.json()
    if (page === 0) {
        showresults.innerHTML =""
    }
    let results = data.results;

    results.map((result)=>{
        let imagediv = document.createElement("div")
        imagediv.classList.add("res")
        let imgage = document.createElement("img")
        imgage.src = result.urls.small;
        imgage.classList.add("img")
        let a = document.createElement("a")
        a.textContent = result.alt_description;
        a.classList.add("info")
        
    imagediv.appendChild(imgage)
    imagediv.appendChild(a)
    showresults.appendChild(imagediv)

    });
    page++
    if (page > 1) {
        ShowMore.style.display = "block"
    }
}

srcbtn.addEventListener("click",(event)=>{
    event.preventDefault()
    page = 1
     getSrc()
})

ShowMore.addEventListener("click",()=>{
     getSrc()
})