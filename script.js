// ===== SLIDER =====
let slides = [
    "zdjecia/1.jpg",
    "zdjecia/2.jpg",
    "zdjecia/3.jpg"
];

let currentSlide = 0;

function showSlide() {
    document.getElementById("slide").src = slides[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
}

// ===== CIEKAWOSTKI =====
let facts = [
    "Santorini powstało w wyniku erupcji wulkanu.",
    "Wyspa ma charakterystyczne białe domy z niebieskimi dachami.",
    "Jest jednym z najczęściej fotografowanych miejsc w Europie."
];

function showFact() {
    let random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[random];
}

// ===== QUIZ =====
let score = 0;

function calculateScore() {

    let form = document.forms["quizForm"];
    let score = 0;

    // Sprawdzenie czy wszystkie pytania mają odpowiedź
    if (!form.q1.value || !form.q2.value || !form.q3.value) {
        alert("Odpowiedz na wszystkie pytania!");
        return;
    }

    // Zliczanie punktów
    score += parseInt(form.q1.value);
    score += parseInt(form.q2.value);
    score += parseInt(form.q3.value);

    // Wyświetlenie wyniku
    document.getElementById("score").innerText =
        "Twój wynik: " + score + " / 3 punktów";

    // Zablokowanie ponownej zmiany odpowiedzi
    let inputs = document.querySelectorAll("#quiz input");
    inputs.forEach(input => input.disabled = true);
}