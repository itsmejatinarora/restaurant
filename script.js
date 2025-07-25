document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        hamburger.classList.toggle("active");
    });
});


// Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Foodie's Delight", "A Taste of Perfection", "The Best Dining Experience"];
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100;
    const autoType = document.querySelector(".auto-type");

    function typeText() {
        if (charIndex < textArray[textIndex].length) {
            autoType.innerHTML += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, speed);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            autoType.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, speed / 2);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, speed);
        }
    }

    typeText();
});





document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const extraText = document.querySelector(".extra-text");

    readMoreBtn.addEventListener("click", function () {
        if (extraText.style.display === "none" || extraText.style.display === "") {
            extraText.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            extraText.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const countdownElements = document.querySelectorAll(".countdown");

    countdownElements.forEach((element) => {
        const eventTime = new Date(element.getAttribute("data-time")).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = eventTime - now;

            if (timeLeft <= 0) {
                element.innerHTML = "Expired!";
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review-card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    function showReview(i) {
        reviews.forEach((review, idx) => {
            review.classList.remove("active");
            if (idx === i) {
                review.classList.add("active");
            }
        });
    }

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + reviews.length) % reviews.length;
        showReview(index);
    });

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % reviews.length;
        showReview(index);
    });

    setInterval(() => {
        index = (index + 1) % reviews.length;
        showReview(index);
    }, 5000); // Auto-slide every 5 seconds

    showReview(index);
});





document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservationForm");
    const successMessage = document.getElementById("successMessage");

    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate Name
        const name = document.getElementById("name").value;
        if (name.length < 3) {
            alert("Please enter a valid name (at least 3 characters).");
            return;
        }

        // Validate Email
        const email = document.getElementById("email").value;
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email.");
            return;
        }

        // Validate Phone
        const phone = document.getElementById("phone").value;
        if (phone.length < 10 || isNaN(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Validate Date
        const date = new Date(document.getElementById("date").value);
        const today = new Date();
        if (date < today) {
            alert("Please choose a future date for the reservation.");
            return;
        }

        // Validate Guests
        const guests = document.getElementById("guests").value;
        if (!guests) {
            alert("Please select the number of guests.");
            return;
        }

        // Show success message
        successMessage.style.display = "block";

        // Clear form fields after 2 seconds
        setTimeout(() => {
            reservationForm.reset();
            successMessage.style.display = "none";
        }, 3000);
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate Name
        const name = document.getElementById("name").value;
        if (name.length < 3) {
            alert("Please enter a valid name (at least 3 characters).");
            return;
        }

        // Validate Email
        const email = document.getElementById("email").value;
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email.");
            return;
        }

        // Validate Message
        const message = document.getElementById("message").value;
        if (message.length < 10) {
            alert("Please enter a longer message (at least 10 characters).");
            return;
        }

        // Show success message
        successMessage.style.display = "block";

        // Clear form fields after 2 seconds
        setTimeout(() => {
            contactForm.reset();
            successMessage.style.display = "none";
        }, 3000);
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const cateringForm = document.getElementById("cateringForm");
    const successMessage = document.getElementById("successMessage");

    cateringForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate Name
        const fullName = document.getElementById("fullName").value;
        if (fullName.length < 3) {
            alert("Please enter a valid name (at least 3 characters).");
            return;
        }

        // Validate Email
        const email = document.getElementById("email").value;
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email.");
            return;
        }

        // Validate Message
        const eventDetails = document.getElementById("eventDetails").value;
        if (eventDetails.length < 10) {
            alert("Please enter more event details (at least 10 characters).");
            return;
        }

        successMessage.style.display = "block";

        setTimeout(() => {
            cateringForm.reset();
            successMessage.style.display = "none";
        }, 3000);
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const diningForm = document.getElementById("diningForm");
    const successMessage = document.getElementById("successMessage");

    diningForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const guestName = document.getElementById("guestName").value;
        const guestEmail = document.getElementById("guestEmail").value;
        const guestCount = document.getElementById("guestCount").value;
        const eventDetails = document.getElementById("eventDetails").value;

        if (guestName.length < 3 || !guestEmail.includes("@") || guestCount < 1 || eventDetails.length < 10) {
            alert("Please fill out all fields correctly.");
            return;
        }

        successMessage.style.display = "block";

        setTimeout(() => {
            diningForm.reset();
            successMessage.style.display = "none";
        }, 3000);
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        
        question.addEventListener("click", () => {
            // Close all other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-answer").style.display = "none";
                }
            });

            // Toggle current FAQ
            const answer = item.querySelector(".faq-answer");
            if (answer.style.display === "block") {
                answer.style.display = "none";
                item.classList.remove("active");
            } else {
                answer.style.display = "block";
                item.classList.add("active");
            }
        });
    });
});
