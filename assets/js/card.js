var $cards = $(".card");
var $style = $(".hover");

$cards.on("mousemove", function (e) {
  var $card = $(this);
  var cardWidth = $card.outerWidth();
  var cardHeight = $card.outerHeight();
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;


  var rotateX = ((mouseY / cardHeight) - 0.5) * 20; 
  var rotateY = ((mouseX / cardWidth) - 0.5) * -20;


  $card.css({
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  });


  var bgPositionX = Math.abs(Math.floor(100 / cardWidth * mouseX) - 100);
  var bgPositionY = Math.abs(Math.floor(100 / cardHeight * mouseY) - 100);

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  
  var gradientStyle = `
    .card.active:before {
      background-position: ${bgPositionX}% ${bgPositionY}%;
      opacity: 0.8;
    }
  `;


  $cards.removeClass("active");
  $card.addClass("active");
  $style.html(gradientStyle);
});

$cards.on("mouseout", function () {
  var $card = $(this);


  $card.css({
    transform: "rotateX(0deg) rotateY(0deg)"
  });


  $cards.removeClass("active");
  $style.html("");
});

