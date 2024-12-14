function vegpickles(){
    window.location.href="vegpickles.html"
}
function nonvegpickles(){
     window.location.href="nonvegpickles.html"
}
function dryfruits(){
    window.location.href="dryfruits.html"
}
function sweets(){
    window.location.href="sweets.html"
}
function powders(){
        window.location.href="powders.html"
}
function ghee(){
    window.location.href="ghee.html"
}
 
function chicken(){
    window.location.href="nonvegpickles.html"
}
function fish(){
    window.location.href="nonvegpickles.html"
}
function lemon(){
    window.location.href="vegpickles.html"
}

function laddu(){
    window.location.href="sweets.html"
}
function karvepaku(){
    window.location.href="powders.html"
}
function cowghee(){
    window.location.href="ghee.html"
}
function homecart(){
    window.location.href="cart.html"

}
function viewmore(){
    window.location.href="veiwmore.html"

}


function search() {

    let query = document.getElementById("searchinput").value.trim().toLowerCase();

    if (query === "veg pickles") {
        window.location.href = "vegpickles.html"; 
    } else {
        alert("No results found for your search.");
    }
}

function search() {
    // Get the value from the search input field
    let query = document.getElementById("searchinput").value.trim().toLowerCase();

    // Check the search query and redirect accordingly
    if (query === "non veg pickles") {
        window.location.href = "nonvegpickles.html";
    } else if (query === "veg pickles") {
        window.location.href = "vegpickles.html";
    } else if (query === "pickle powder") {
        window.location.href = "powders.html";
    }else if (query === "sweets") {
        window.location.href = "sweets.html";
    }else if (query === "ghee") {
        window.location.href = "ghee.html";
    }else if (query === "dry fruits") {
        window.location.href = "dryfruits.html";
    }
     else {
        alert("No results found for your search.");
    }
}

