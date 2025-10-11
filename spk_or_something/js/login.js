const login = (event) => {
    event.preventDefault();

    let email = document.querySelector("#login-email").value.trim();
    let password = document.querySelector("#login-password").value.trim();

    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : {};
    let storedUser = users[email];

    if (storedUser && storedUser.password === password){
        alert("Đăng nhặp thành công")
        window.location.href = 'Trangchu.html'
    }else{
        alert("Đăng nhập thất bại");
    }
}

document.getElementById("login-form").addEventListener('submit',login)