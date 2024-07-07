let day = new Date().getDay(); 
let title = document.getElementById('EaseTitle')

if (day == 1) {
    title.style.color = 'yellow';
}
    else if (day == 2) {
    title.style.color = 'pink';
    }
    else if (day == 3) {
        title.style.color = 'green';
    }
    else if (day == 4) {
            title.style.color = 'orange';
    }
    else if (day == 5) {
        title.style.color = 'blue';
    }
    else if (day == 6) {
        title.style.color = 'purple';
    }
    else {
        title.style.color = 'red';
    }

// changing css property (image opacity)

let images = document.querySelectorAll('img');
console.log(images);

function changeOpacity() {
    images[0].style.opacity = '0.6';
    images[1].style.opacity = '0.6';
    images[2].style.opacity = '0.6';
    
    this.style.opacity = '1';
}

function resetOpacity() {
    images[0].style.opacity = '1';
    images[1].style.opacity = '1';
    images[2].style.opacity = '1';
}

images[0].addEventListener('pointerover', changeOpacity);
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);

images[0].addEventListener('pointerout', resetOpacity);
images[1].addEventListener('pointerout', resetOpacity);
images[2].addEventListener('pointerout', resetOpacity);