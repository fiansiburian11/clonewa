document.getElementById("sendButton").addEventListener("click", function () {
  const inputField = document.getElementById("inputMessage");
  const messageText = inputField.value.trim();

  if (messageText) {
    // Menampilkan pesan yang dikirim
    displayMessage(messageText, "sent");

    // Mengosongkan input
    inputField.value = "";

    // Menjawab dengan pesan bot setelah 1 detik
    setTimeout(() => {
      displayMessage("Terima kasih telah mengirim pesan!", "received");
    }, 1000);
  }
});

function displayMessage(message, type) {
  const messagesContainer = document.getElementById("messages");

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Gulir ke bawah
}
