const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;


let input = document.querySelector("#scr-input")
let srcbtn = document.querySelector("#srcbtn")
let showresults = document.querySelector(".showresults")
let ShowMore = document.querySelector("#ShowMore")