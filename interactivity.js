// changing content (image of the main page)

let altImage1 = document.querySelector('.s1')
console.log(altImage1)
let altImage2 = document.querySelector('.s2')
let mainImage = document.querySelector('.a');

function changepic1() {
    mainImage.src = 'images/signup-270.png';
    mainImage.srcset = 'images/signup-540.png 2x';
}

function changepic2() {
    mainImage.src = 'images/menupage-270.png';
    mainImage.srcset = 'images/menupage-540.png 2x';
}

altImage1.addEventListener('click', changepic1);
altImage2.addEventListener('click', changepic2);

// Day of the Week (color of title changes every day)

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




