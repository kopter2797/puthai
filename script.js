function checkAnswer(isCorrect) {
    const messageElement = document.getElementById("message");
    if (isCorrect) {
        messageElement.textContent = "ใช่นี้แหละเพื่อนแท้!";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "ผิดแล้ว!";
        messageElement.style.color = "red";
    }
}
