// Warte, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Holen Sie sich das Video-Element
    const video = document.getElementById("rickVideo");

    //setTimeout(() => { video.muted = false }, 5000);

    document.addEventListener("keydown", function (event) {
        if (event.key === "F11" || event.key === "Enter") {
            video.play();
            //video.muted = false;
        }
    });

    
});
