window.onload = function() {
    const star = document.getElementById("star");
    const background = document.getElementById("app");

    star.addEventListener("click", function() {
        star.classList.toggle('clicked');
        background.classList.toggle('color-change');
    })
}