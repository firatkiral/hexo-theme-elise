var body = document.querySelector('body');
body.onload = function () {
    Masonry.data( document.getElementById("masonry-layout")).layout();
};