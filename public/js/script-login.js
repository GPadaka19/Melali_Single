document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closeButton");
    const popupMessage = document.getElementById("popupMessage");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validasi sederhana
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const terms = document.getElementById("terms").checked;

        if (email && password && confirmPassword && terms && password === confirmPassword) {
            // Tampilkan pesan sukses
            popupMessage.textContent = "Successfully logged in!";
            popup.classList.add("show");

            // Reset form setelah berhasil sign in
            loginForm.reset();
        } else {
            // Tampilkan pesan error
            popupMessage.textContent = "Please fill in all fields correctly.";
            popup.style.display = "flex";
        }
    });

    closeButton.addEventListener("click", function() {
        popup.classList.remove("show");
        setTimeout(() =>{
            popup.style.display = ("none");
        }, 300);
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.classList.remove("show");
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }
    });

    // Tambahkan ini untuk mereset display ke 'flex' saat popup di-show
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && popup.classList.contains('show')) {
                popup.style.display = 'flex';
            }
        });
    });
    observer.observe(popup, { attributes: true });
});
