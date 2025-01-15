 const overlay = document.getElementById("overlay");
 const content = document.querySelector(".content");
 const backgroundVideo = document.getElementById("background-video");


 backgroundVideo.volume = 0.3;


 function playMusicAndHideOverlay() {
     backgroundVideo.style.display = 'block';
     

     backgroundVideo.play().catch(error => {
         console.log("Autoplay blocked, waiting for user interaction.");
  
         document.body.addEventListener('click', function() {
             backgroundVideo.play();
         });
     });

     overlay.classList.add("hidden");

     setTimeout(() => {
         overlay.style.display = "none";
         content.style.display = "block";
     }, 500);
 }


 window.addEventListener('load', function () {
     const profileBox = document.querySelector('.profile-box');
     profileBox.classList.remove('no-tilt');
     profileBox.classList.remove('loading');
 });


 if (document.addEventListener) {
     document.addEventListener('contextmenu', function(e) {
         e.preventDefault();
     });
 } else if (document.attachEvent) {
     document.attachEvent('oncontextmenu', function(e) {
         e.preventDefault();
     });
 }


 document.querySelectorAll(".profile-box").forEach(box => {
     let timer;
     
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

         box.style.transition = 'transform 0.1s ease-out';
         box.style.transform = `perspective(1500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
     });

     box.addEventListener("mouseleave", () => {
         clearTimeout(timer); 

         timer = setTimeout(() => {
             box.style.transition = 'transform 0.3s ease-out';
             box.style.transform = "perspective(1500px) rotateX(0) rotateY(0)";
         }, 50);
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


 const phrases = [
     "Welcome to My Site!",
 ];
 const speed = 100;
 const delayBetweenPhrases = 1500;
 
 const typewriterText = document.getElementById("typewriter-text");
 
 let phraseIndex = 0;
 let charIndex = 0;
 let isDeleting = false;
 
 function type() {
     const currentPhrase = phrases[phraseIndex];
     if (isDeleting) {
         charIndex--;
     } else {
         charIndex++;
     }
 
     typewriterText.textContent = currentPhrase.slice(0, charIndex);
 
     if (!isDeleting && charIndex === currentPhrase.length) {
         isDeleting = true;
         setTimeout(type, delayBetweenPhrases);
     } else if (isDeleting && charIndex === 0) {
         isDeleting = false;
         phraseIndex = (phraseIndex + 1) % phrases.length;
         setTimeout(type, 300);
     } else {
         setTimeout(type, isDeleting ? speed / 2 : speed);
     }
 }

 type();
