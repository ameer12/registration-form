document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMessage = document.getElementById("errorMessage");

  if (!name || !email || !password || !confirmPassword) {
    errorMessage.textContent = "يرجى ملء جميع الحقول.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "يرجى إدخال بريد إلكتروني صحيح.";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "كلمتا المرور غير متطابقتين.";
    return;
  }

  errorMessage.style.color = "green";
  errorMessage.textContent = "تم التسجيل بنجاح!";
});
