(function () {
    emailjs.init("ytq7g2sz_tQ9KZ32V"); // 🔴 yaha public key daalo
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_i99bp0e",     // 🔴 service id
        "service_i99bp0e",    // 🔴 template id
        this
    )
    .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    }, function (error) {
        alert("Failed to send message. Try again!");
        console.log(error);
    });
});
