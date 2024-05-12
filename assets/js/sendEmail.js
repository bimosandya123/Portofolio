emailjs.init("XWL3_6ZibSmNGJ2Ap"); // Gantilah dengan User ID Anda

function sendEmail() {
  var params = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("pesan").value,

  }
  emailjs.send("service_qwbm8xl","template_g5uab2l", params)
    .then(
      function(response) {
        console.log("Email sent successfully:", response);
        alert('berhasil');
        location.reload();
      },
      function(error) {
        console.log("Failed to send email:", error);
        alert('gagal')
      }
    );
}