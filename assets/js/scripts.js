const snowflakeContainer = document.body;
let snowflakes = [];

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 5 + 2;
    const leftPosition = Math.random() * 100;
    const animationDuration = Math.random() * 3 + 3;
    const animationDelay = Math.random() * 3;
    const driftDirection = Math.random() > 0.5 ? 1 : -1;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${leftPosition}%`;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationDelay = `${animationDelay}s`;
    snowflake.style.setProperty("--drift", driftDirection);

    snowflakeContainer.appendChild(snowflake);

    snowflakes.push(snowflake);

    setTimeout(() => {
        snowflake.remove();
        snowflakes = snowflakes.filter((s) => s !== snowflake);
    }, animationDuration * 1000);
}

function showSnowflakes() {
    setInterval(() => {
        createSnowflake();
    }, 100);
}

const overlay = document.getElementById("overlay");
const content = document.querySelector(".content");
const audio = document.getElementById("my_audio");

audio.volume = 0.3;

function playMusicAndHideOverlay() {
    audio.play();
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

$(document).ready(function () {
    $(".profile-box").on("mousemove", function (e) {
        const $this = $(this);
        const offset = $this.offset();
        const width = $this.width();
        const height = $this.height();
        const centerX = offset.left + width / 2;
        const centerY = offset.top + height / 2;
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        const deltaX = (mouseX - centerX) / width;
        const deltaY = (mouseY - centerY) / height;

        const tiltX = deltaY * 30;
        const tiltY = -deltaX * 30;

        $this.css("transform", `perspective(1500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`);
    });

    $(".profile-box").on("mouseleave", function () {
        $(this).css("transform", "perspective(1500px) rotateX(0) rotateY(0)");
    });
});

document.body.addEventListener("mousemove", function (event) {
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

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("mousemove", (event) => {
        const buttonRect = button.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const strength = 25;

        const rotateX = (deltaY / buttonRect.height) * strength;
        const rotateY = (deltaX / buttonRect.width) * strength;

        button.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
});

window.onload = function () {
    setTimeout(function () {
        document.getElementById('script-container').style.opacity = 1;
    }, 3000);


    setTimeout(() => {
        const asciiContainer = document.getElementById('ascii-container');
        if (asciiContainer) {
            asciiContainer.style.opacity = 0;
            asciiContainer.style.visibility = 'visible';
            asciiContainer.style.transition = 'opacity 2s ease-in-out'; 

            setTimeout(() => {
                asciiContainer.style.opacity = 1;
            }, 100);
        }
    }, 3000); 
};


const asciiScript = document.createElement("script");
asciiScript.src = "https://www.qqpr.com/ascii/js/1095.js";
document.body.appendChild(asciiScript);

asciiScript.onload = function () {
    const asciiContainer = document.getElementById('ascii-container');
    if (asciiContainer) {
        asciiContainer.style.opacity = 0;
        asciiContainer.style.transition = 'opacity 2s';
        setTimeout(() => {
            asciiContainer.style.opacity = 1;
        }, 100);
    }
};
