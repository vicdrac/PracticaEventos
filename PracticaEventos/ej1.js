document.addEventListener("keydown", function(event) {
    if (event.altKey && event.key === "F12") {
        document.body.style.backgroundImage = `url('https://picsum.photos/1920/1080?a=${Math.random()}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";       
    }
});