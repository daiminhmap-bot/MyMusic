const signup = (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").
        value.trim();
    const password = document.querySelector("#password").
        value.trim();
    const confirmPassword = document.querySelector("#confirm-password").
        value.trim();

    //regular expression
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    //Validate
    if (!email || !password || !confirmPassword) {
        alert("Vui lòng ghi đầy đủ!!!")
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu chưa khớp!")
        return;
    }

    if (password.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 kí tự!")
        return;
    }

    if (!password.match(upperCaseLetter)) {
        alert("Mật khẩu cần ít nhất kí tự in hoa!")
        return
    }

    if (!password.match(lowerCaseLetter)) {
        alert("Mật khẩu cần ít nhất 1 kí tự chữ cái thường!")
        return
    }

    if (!password.match(numbers)) {
        alert("Mật khẩu cần ít nhất 1 kí tự số!")
        return
    }

    let user = {
        email: email,
        password: password
    }

    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

    if (users[email]) {
        alert("Tài khoản đã tồn tại")
    }else{
        users[email] = user;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng kí thành công");
        window.location.href = './login.html';
    }
}
document.querySelector("#signup").addEventListener("submit", signup);