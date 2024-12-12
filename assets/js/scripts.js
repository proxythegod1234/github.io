
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

    document.addEventListener('mousemove', (e) => {
      createFairyDust(e.pageX, e.pageY);
    });

    function createFairyDust(x, y) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

  
      particle.style.setProperty('--x-offset', Math.random() - 0.5);
      particle.style.setProperty('--y-offset', Math.random() - 0.5);

      document.body.appendChild(particle);

     
      setTimeout(() => {
        particle.remove();
      }, 1500);
    }
 
    
    
