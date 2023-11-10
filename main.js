const popup = document.querySelector('.popup_section');
const openBtn = document.getElementById('open_btn');
const closeBtn = document.querySelector('.close_btn');

openBtn.onclick = function() {
    popup.style.display = 'block';
}

closeBtn.onclick = function() {
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == popup) {
        popup.style.display = 'none';
    }
}