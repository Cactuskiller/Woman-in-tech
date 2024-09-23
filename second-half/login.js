const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");
const toggleIcon = document.getElementById("toggleIcon");

togglePassword.addEventListener("click", function () {
  event.preventDefault();
  // تغيير نوع الإدخال بين النص وكلمة المرور
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);

  // تغيير أيقونة العين
  toggleIcon.classList.toggle("fa-eye");
  toggleIcon.classList.toggle("fa-eye-slash");
});
