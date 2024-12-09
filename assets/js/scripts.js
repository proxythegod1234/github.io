const overlay = document.getElementById("overlay");
const content = document.querySelector(".content");
const backgroundVideo = document.getElementById("background-video");


backgroundVideo.volume = 0.3;

function playMusicAndHideOverlay() {
 
    backgroundVideo.style.display = 'block';
    backgroundVideo.play(); 
    

    overlay.classList.add("hidden");


    setTimeout(() => {
        overlay.style.display = "none";
        content.style.display = "block";
        showSnowflakes();
    }, 500);
}


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});


document.querySelectorAll(".profile-box").forEach(box => {
    box.addEventListener("mousemove", (e) => {
        const rect = box.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        const deltaX = (mouseX - centerX) / rect.width;
        const deltaY = (mouseY - centerY) / rect.height;

        const tiltX = deltaY * 30;
        const tiltY = -deltaX * 30;

        box.style.transform = `perspective(1500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "perspective(1500px) rotateX(0) rotateY(0)";
    });
});


document.body.addEventListener("mousemove", (event) => {
    createSpark(event.clientX, event.clientY);
});

function createSpark(x, y) {
    const numSparks = 5;
    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement("div");
        spark.classList.add("spark");

        const angle = Math.random() * 360;
        const distance = Math.random() * 50 + 20;
        const duration = Math.random() * 0.4 + 0.2;

        spark.style.left = `${x - 5}px`;
        spark.style.top = `${y - 5}px`;
        spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
        spark.style.animationDuration = `${duration}s`;

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, duration * 1000);
    }
}

function playVideoAndHideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';


    const background = document.getElementById('background-video');
    background.style.display = 'block';


    const content = document.querySelector(".content");
    content.style.display = "block";
    showSnowflakes();
}


setTimeout(() => {
    document.getElementById('script-container').style.opacity = 1;
}, 3000);


setTimeout(() => {
    const container = document.getElementById('background-video');
    if (container) {
        container.style.opacity = 0;
        container.style.visibility = 'visible';
        container.style.transition = 'opacity 2s ease-in-out'; 

        setTimeout(() => {
            container.style.opacity = 1;
        }, 100);
    }
}, 3000);
