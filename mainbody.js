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


window.onload = function() {
    displayItems(); // Display items first regardless of login status
}

function handleItemClick(itemName) {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
        const itemPages = {
            'Veg Pickles': 'vegpickles.html',
            'Non-Veg Pickles': 'nonvegpickles.html',
            'Dry Fruits': 'dryfruits.html',
            'Sweets': 'sweets.html',
            'Pickle Powder': 'powders.html',
            'Pure Ghee': 'ghee.html'
        };

        const page = itemPages[itemName];
        if (page) {
            window.location.href = page;
        } else {
            Swal.fire({
                icon: "info",
                title: `Page for ${itemName} not found`,
                text: "This item does not have a corresponding page."
            });
        }
    } else {
        handleLogin(); // Prompt login if no credentials stored
    }
}

function handleSignUp() {
    Swal.fire({
        title: 'Sign Up',
        html: ` 
            <input type="text" id="signupName" class="swal2-input" placeholder="Enter your name">
            <input type="email" id="signupEmail" class="swal2-input" placeholder="Enter your email">
            <input type="password" id="signupPassword" class="swal2-input" placeholder="Create a password">
        `,
        confirmButtonText: 'Sign Up',
        preConfirm: () => {
            const name = Swal.getPopup().querySelector('#signupName').value;
            const email = Swal.getPopup().querySelector('#signupEmail').value;
            const password = Swal.getPopup().querySelector('#signupPassword').value;

            if (!name || !email || !password) {
                Swal.showValidationMessage(`Please enter name, email, and password`);
            }

            return { name, email, password };
        },
        customClass: {
            popup: 'swal2-popup',
            title: 'swal2-title',
            actions: 'swal2-actions',
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { name, email, password } = result.value;

            // Store the user details in localStorage
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            // Prompt login after sign-up
            Swal.fire({
                icon: "success",
                title: "Sign Up Successful",
                text: "Your account has been created! Please log in."
            }).then(() => {
                handleLogin(); // Show login screen after sign-up
            });
        }
    });
}

function handleLogin() {
    Swal.fire({
        title: 'Login',
        html: ` 
            <input type="email" id="loginEmail" class="swal2-input" placeholder="Enter your email">
            <input type="password" id="loginPassword" class="swal2-input" placeholder="Enter your password">
        `,
        confirmButtonText: 'Login',
        showCancelButton: true,
        cancelButtonText: 'Sign Up',
        preConfirm: () => {
            const email = Swal.getPopup().querySelector('#loginEmail').value;
            const password = Swal.getPopup().querySelector('#loginPassword').value;

            if (!email || !password) {
                Swal.showValidationMessage(`Please enter both email and password`);
            }

            return { email, password };
        },
        customClass: {
            popup: 'swal2-popup',
            title: 'swal2-title',
            actions: 'swal2-actions',
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { email, password } = result.value;

            const storedEmail = localStorage.getItem("email");
            const storedPassword = localStorage.getItem("password");
            const storedName = localStorage.getItem("name");

            if (email === storedEmail && password === storedPassword) {
                Swal.fire({
                    icon: "success",
                    title: `Welcome, ${storedName}!`,
                    text: `Login Successful`
                }).then(() => {
                    // After successful login, continue with the item interaction
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Invalid Credentials",
                    text: "Please check your email and password and try again."
                });
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            handleSignUp(); // Redirect to sign-up if clicked "Sign Up"
        }
    });
}

function displayItems() {
    document.getElementById("loginMessage").style.display = "none"; // Hide login message
    document.getElementById("vegmain").style.display = "grid"; // Show items section
}


