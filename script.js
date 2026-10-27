function login(){
    event.preventDefault();
    let email=document.getElementById("email").value;
    let password =document.getElementById("password").value;
    //console.log("email",email);
    //console.log("password:",password);
    let error = document.getElementById("error");
    if(email ==="admin@gmail.com"  && password ==="1234")
    {
        localStorage.setItem("isLoggenIn","true");
        localStorage.setItem("user",email);
        localStorage.setItem("userpassword",password);

        //redirected
        window.location.href ="index.html";

    }
    else{
        error.innerText="Invalid email or password";
    }
}

function toggelepassword(){
    let passwordInput=document.getElementById("password")

    if(passwordInput.type ==="passsword")
    {passwordInput.type="text";

    }
    else{
        passwordInput.type="password"}
}