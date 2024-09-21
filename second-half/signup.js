// الحقل الأول
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const toggleIcon = document.getElementById('toggleIcon');

togglePassword.addEventListener('click', function (event) {
    event.preventDefault();
    // تغيير نوع الإدخال بين النص وكلمة المرور
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // تغيير أيقونة العين
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
});

// الحقل الثاني
const togglePassword2 = document.getElementById('togglePassword2');
const passwordField2 = document.getElementById('password2');
const toggleIcon2 = document.getElementById('toggleIcon2');

togglePassword2.addEventListener('click', function (event) {
    event.preventDefault();
    // تغيير نوع الإدخال بين النص وكلمة المرور
    const type2 = passwordField2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField2.setAttribute('type', type2);
    
    // تغيير أيقونة العين
    toggleIcon2.classList.toggle('fa-eye');
    toggleIcon2.classList.toggle('fa-eye-slash');
});
