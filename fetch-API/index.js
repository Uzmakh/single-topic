// ! CLASS-63
// ! API Response Handling

const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
let img = document.querySelector("#cat");
let button = document.querySelector(".clickBtn");

let response = fetch(URL);
console.log(response);
console.log(response.status);

let catPics = async () => {
    console.log("Getting Data from API...");
    const response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].width);
    console.log(data[0].url);
    img.src = data[0].url;
}

// catPics();
button.addEventListener("click", catPics);