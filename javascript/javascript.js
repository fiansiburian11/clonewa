document.querySelector("form").addEventListener("submit", function (event) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email dan Kata Sandi harus diisi!");
    event.preventDefault(); // Mencegah form untuk submit
  }
});
