

function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(password === "" || email === ""){
        window.alert("please fill the data")
    }

}