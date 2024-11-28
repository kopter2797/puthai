function checkAnswer(isCorrect) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");

    if (isCorrect) {
        modalMessage.textContent = "ใช่นี้แหละเพื่อนแท้!";
        modalMessage.style.color = "green";
    } else {
        modalMessage.textContent = "ผิดแล้ว! นี่ไม่ใช่เพื่อนคุณ";
        modalMessage.style.color = "red";
    }

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
