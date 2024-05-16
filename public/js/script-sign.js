document.addEventListener("DOMContentLoaded", function() {
    const signForm = document.getElementById("signForm");
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closeButton");
    const popupMessage = document.getElementById("popupMessage");

    signForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validasi sederhana
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const terms = document.getElementById("terms").checked;

        if (email && password && confirmPassword && terms && password === confirmPassword) {
            // Tampilkan pesan sukses
            popupMessage.textContent = "Successfully created an account!";
            popup.classList.add("show");

            // Reset form setelah berhasil sign in
            signForm.reset();
        } else {
            // Tampilkan pesan error
            popupMessage.textContent = "Please fill in all fields correctly.";
            popup.classList.add("show");
        }
    });

    closeButton.addEventListener("click", function() {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
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
