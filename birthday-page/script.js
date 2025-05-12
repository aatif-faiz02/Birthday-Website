document.addEventListener("DOMContentLoaded", function () {
  // Loading screen animation
  const loadingBar = document.querySelector(".loading-bar");
  const loadingScreen = document.getElementById("loading-screen");

  // Simulate loading process
  setTimeout(() => {
    loadingBar.style.width = "100%";
  }, 500);

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.getElementById("section-1").classList.add("active");
    }, 500);
  }, 3000);


  createFloatingElements();

  setupNavigation();

  setupSlideshow();

  typeWriterEffect();

  setupAudio();

  setupPopup();

  createConfetti();

  setupCakeAndWish();

  setupBalloonGame();

  setupSecretMessage();

  setupFloatingHeartButtons();

  setupInteractiveHearts();

  setupWishGenerator();

  setupLoveCalculator();

  setupFallingPetals();

  setupGiftBox();

  setupFloatingLoveMessage();
});

function createFloatingElements() {
  const container = document.getElementById("floating-elements");
  const numElements = window.innerWidth < 768 ? 20 : 40;

  for (let i = 0; i < numElements; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 15}s`;
    heart.style.opacity = "0." + Math.floor(Math.random() * 9 + 1);
    heart.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.6 + 0.4
      })`;
    container.appendChild(heart);

    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDelay = `${Math.random() * 20}s`;
    balloon.style.backgroundColor = getRandomPastelColor();
    container.appendChild(balloon);

    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(sparkle);
  }
}

function getRandomPastelColor() {
  const colors = [
    "#ffb6c1",
    "#e6e6fa",
    "#add8e6",
    "#fffacd",
    "#f5f5dc",
    "#e0ffff",
    "#ffdab9",
    "#d0f0c0",
    "#fadde1",
    "#f8b195",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function setupNavigation() {
  const nextButtons = document.querySelectorAll(".next-btn");

  nextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const currentSection = button.closest(".section");
      const nextSectionId = button.getAttribute("data-next");
      const nextSection = document.getElementById(nextSectionId);

      currentSection.classList.remove("active");

      setTimeout(() => {
        nextSection.classList.add("active");

        if (nextSectionId === "section-4") {
          animateConfetti();
        }
      }, 600);
    });
  });
}

function setupSlideshow() {
  const slides = document.querySelectorAll(".memory-slide");
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 2000);
}

function typeWriterEffect() {
  const text = document.getElementById("typewriter");
  const originalText = text.textContent;
  text.textContent = "";

  let i = 0;
  function type() {
    if (i < originalText.length) {
      text.textContent += originalText.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(type, 500);
        observer.unobserve(text);
      }
    });
  });

  observer.observe(text);
}

function createConfetti() {
  const container = document.getElementById("confetti-container");
  const confettiColors = [
    "#ffb6c1",
    "#add8e6",
    "#e6e6fa",
    "#fffaf0",
    "#ffd700",
    "#98fb98",
    "#fadde1",
    "#d0f0c0",
  ];
  const confettiCount = window.innerWidth < 768 ? 75 : 150;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.backgroundColor =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    container.appendChild(confetti);
  }
}

function animateConfetti() {
  const confetti = document.querySelectorAll(".confetti");

  confetti.forEach((c) => {
    const speed = Math.random() * 3 + 2;
    const rotation = Math.random() * 360;
    const delay = Math.random() * 3;

    c.style.animation = `confettiFall ${speed}s ease-in ${delay}s forwards, confettiRotate ${speed / 2
      }s linear ${delay}s infinite`;
    c.style.opacity = "1";

    const keyframes = `
        @keyframes confettiFall {
            0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(${window.innerHeight}px) rotate(${rotation}deg); opacity: 0; }
        }
        
        @keyframes confettiRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
  });
}

function setupCakeAndWish() {
  const frosting = document.getElementById("frosting");
  const frosting1 = document.getElementById("frosting1");
  const frosting2 = document.getElementById("frosting2");
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    dot.classList.add("frosting-dot");
    dot.style.left = `${Math.random() * 180}px`;
    dot.style.top = `${Math.random() * 20}px`;
    frosting.appendChild(dot);
  }
  
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    dot.classList.add("frosting-dot1");
    dot.style.left = `${Math.random() * 180}px`;
    dot.style.top = `${Math.random() * 20}px`;
    frosting1.appendChild(dot);
  }

  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    dot.classList.add("frosting-dot2");
    dot.style.left = `${Math.random() * 180}px`;
    dot.style.top = `${Math.random() * 20}px`;
    frosting2.appendChild(dot);
  }

  const makeWishBtn = document.getElementById("make-wish");
  const flame = document.getElementById("flame");

  makeWishBtn.addEventListener("click", function () {
    flame.style.animation = "flicker 0.3s ease-in-out 5";
    setTimeout(() => {
      flame.style.opacity = "0";

      const wishMessage = document.createElement("div");
      wishMessage.textContent = "✨Your wish has been made! May God Bless you with Everything!✨";
      wishMessage.style.textAlign = "center";
      wishMessage.style.marginTop = "40px";
      wishMessage.style.color = "#e91e63";
      wishMessage.style.animation = "fadeIn 1s forwards";

      document.querySelector(".cake-container").appendChild(wishMessage);

      animateConfetti();
    }, 1500);
  });
}

function setupBalloonGame() {
  const balloons = document.querySelectorAll(".game-balloon");

  balloons.forEach((balloon) => {
    balloon.addEventListener("click", function () {
      this.classList.add("popped");

      const pop = document.createElement("div");
      pop.textContent = "💕";
      pop.style.position = "absolute";
      pop.style.fontSize = "1.5rem";
      pop.style.left = `${balloon.offsetLeft + balloon.offsetWidth / 2}px`;
      pop.style.top = `${balloon.offsetTop + balloon.offsetHeight / 2}px`;
      pop.style.transform = "translate(-50%, -50%)";
      pop.style.animation = "float 2s ease-out forwards";
      balloon.parentNode.appendChild(pop);

      setTimeout(() => {
        this.remove();
      }, 500);
    });
  });
}

function setupSecretMessage() {
  const secretMessage = document.getElementById("secret-message");

  secretMessage.addEventListener("click", function () {
    this.classList.toggle("revealed");
  });
}

function setupFloatingHeartButtons() {
  const addHeartBtn = document.getElementById("add-heart");
  const addStarBtn = document.getElementById("add-star");
  const addSparkleBtn = document.getElementById("add-sparkle");
  const addKissBtn = document.getElementById("add-kiss");
  const addCakeBtn = document.getElementById("add-cake");

  addHeartBtn.addEventListener("click", function () {
    createCustomFloatingElement("❤️", "crimson");
  });

  addStarBtn.addEventListener("click", function () {
    createCustomFloatingElement("⭐", "gold");
  });

  addSparkleBtn.addEventListener("click", function () {
    createCustomFloatingElement("✨", "goldenrod");
  });

  addKissBtn.addEventListener("click", function () {
    createCustomFloatingElement("😘", "#ff7bac");
  });

  addCakeBtn.addEventListener("click", function () {
    createCustomFloatingElement("🎂", "#8d6e63");
  });
}

function createCustomFloatingElement(emoji, color) {
  const container = document.body;
  const element = document.createElement("div");
  element.textContent = emoji;
  element.style.position = "fixed";
  element.style.fontSize = "2rem";
  element.style.color = color;
  element.style.left = `${Math.random() * 80 + 10}%`;
  element.style.top = `${Math.random() * 80 + 10}%`;
  element.style.zIndex = "1000";
  element.style.animation = "customFloat 3s ease-out forwards";
  element.style.pointerEvents = "none";
  container.appendChild(element);

  const keyframes = `
    @keyframes customFloat {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        20% { transform: scale(1.5) rotate(20deg); opacity: 1; }
        80% { transform: scale(1) rotate(-20deg); opacity: 1; }
        100% { transform: scale(0) rotate(0deg); opacity: 0; }
    }
`;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

  setTimeout(() => {
    element.remove();
    styleSheet.remove();
  }, 3000);
}

function setupAudio() {
  const audioToggle = document.getElementById("audio-toggle");
  const backgroundMusic = document.getElementById("background-music");
  let isPlaying = false;

  audioToggle.addEventListener("click", function () {
    if (isPlaying) {
      backgroundMusic.pause();
      audioToggle.textContent = "♪";
      audioToggle.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    } else {
      backgroundMusic.play();
      audioToggle.textContent = "♫";
      audioToggle.style.backgroundColor = "rgba(255, 182, 193, 0.7)";
    }
    isPlaying = !isPlaying;
  });
}

function setupPopup() {
  const surpriseBtn = document.getElementById("surprise-btn");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("close-popup");

  surpriseBtn.addEventListener("click", function () {
    popup.classList.add("active");
    overlay.classList.add("active");
    popup.classList.remove("hide-popup");

    createHeartShower();
  });

  closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  const hug = document.getElementById("hug");
  hug.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.3)";
    this.textContent = "💖";
  });

  hug.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    this.textContent = "🤗";
  });

  hug.addEventListener("click", function () {
    this.textContent = "💝";
    this.style.transform = "scale(1.5)";

    setTimeout(() => {
      this.textContent = "🤗";
      this.style.transform = "scale(1)";
    }, 1000);
  });
}

function createHeartShower() {
  const heartEmojis = ["❤️", "💖", "💕", "💓", "💗", "💝", "💘", "💞"];
  const container = document.querySelector(".popup");

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.textContent =
      heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.position = "absolute";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = "0";
      heart.style.fontSize = `${Math.random() * 1 + 0.5}rem`;
      heart.style.opacity = "0";
      heart.style.animation = `heartShower 3s ease-in forwards ${Math.random() * 2
        }s`;
      heart.style.pointerEvents = "none";
      container.appendChild(heart);

      const keyframes = `
            @keyframes heartShower {
                0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                100% { transform: translateY(${container.offsetHeight
        }px) rotate(${Math.random() * 360}deg); opacity: 0; }
            }
        `;

      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);

      // Remove after animation
      setTimeout(() => {
        heart.remove();
        styleSheet.remove();
      }, 5000);
    }, i * 100);
  }
}

function setupInteractiveHearts() {
  const heartButton = document.getElementById("heart-button");
  const heartMeter = document.getElementById("heart-meter");
  const heartMessage = document.getElementById("heart-message");

  let heartCount = 0;
  const maxHearts = 10;
  const messages = [
    "Our love is growing...",
    "Getting warmer...",
    "Our hearts are syncing...",
    "So much love between us!",
    "Our love is boundless!",
    "Infinite love overflowing!",
  ];

  heartButton.addEventListener("click", function () {
    if (heartCount < maxHearts) {
      heartCount++;

      // Update the heart meter width
      const percentage = (heartCount / maxHearts) * 100;
      heartMeter.style.width = `${percentage}%`;

      // Update message
      const messageIndex = Math.floor(
        (heartCount / maxHearts) * (messages.length - 1)
      );
      heartMessage.textContent = messages[messageIndex];

      // Animation for the button
      this.style.transform = "scale(1.3)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);

      // Create floating hearts above the button
      const heart = document.createElement("div");
      heart.textContent = "❤️";
      heart.style.position = "absolute";
      heart.style.fontSize = "1.5rem";
      heart.style.top = "-20px";
      heart.style.left = "50%";
      heart.style.transform = "translateX(-50%)";
      heart.style.animation = "floatUpHeart 2s ease-out forwards";
      heart.style.opacity = "0";
      heart.style.pointerEvents = "none";
      this.appendChild(heart);

      // If max hearts reached, show a special message
      if (heartCount === maxHearts) {
        setTimeout(() => {
          heartMessage.textContent =
            "Our love is infinite! ❤️ Forever and always!";
          heartMessage.style.fontWeight = "bold";
          heartMessage.style.color = "#e91e63";

          // Create a heart explosion
          for (let i = 0; i < 20; i++) {
            setTimeout(() => {
              createCustomFloatingElement("❤️", "#e91e63");
            }, i * 100);
          }
        }, 500);
      }

      // Add animation keyframes
      const keyframes = `
        @keyframes floatUpHeart {
          0% { transform: translate(-50%, 0) scale(0.5); opacity: 0; }
          20% { transform: translate(-50%, -20px) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -80px) scale(0); opacity: 0; }
        }
      `;

      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);

      // Remove the heart element after animation
      setTimeout(() => {
        heart.remove();
        styleSheet.remove();
      }, 2000);
    }
  });
}

function setupWishGenerator() {
  const generateWishButton = document.getElementById("generate-wish");
  const generatedWishContainer = document.getElementById("generated-wish");

  const wishes = [
    "May your birthday sparkle with joy and laughter!",
    "May all your dreams and wishes come true today and always!",
    "May this year bring you endless moments of happiness and love!",
    "May your special day be as wonderful and unique as you are!",
    "May the love we share grow stronger with each passing day!",
    "May you feel my love surrounding you on your special day!",
    "May your heart be light, your smile be bright, and your day be perfect!",
    "May our journey together continue to be filled with beautiful memories!",
  ];

  generateWishButton.addEventListener("click", function () {
    // Pick a random wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

    // Clear previous content
    generatedWishContainer.textContent = "";

    // Create the typewriter effect
    let i = 0;
    function typeWish() {
      if (i < randomWish.length) {
        generatedWishContainer.textContent += randomWish.charAt(i);
        i++;
        setTimeout(typeWish, 50);
      } else {
        // Add a special heart at the end
        const heart = document.createElement("span");
        heart.textContent = " ❤️";
        heart.style.color = "#e91e63";
        heart.style.animation = "pulseHeart 1s infinite";
        generatedWishContainer.appendChild(heart);

        // Add animation keyframes
        const keyframes = `
          @keyframes pulseHeart {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
          }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
      }
    }

    // Start typing effect
    typeWish();

    // Apply the active style to the wish container
    generatedWishContainer.style.borderColor = "#ffb6c1";
    generatedWishContainer.style.backgroundColor = "rgba(255, 182, 193, 0.1)";
  });
}

function setupLoveCalculator() {
  // The love meter is already set to 100%, but we can add a pulsing animation
  const loveMeterFill = document.querySelector(".love-meter-fill");

  loveMeterFill.style.animation = "pulseLove 2s infinite alternate";

  const keyframes = `
    @keyframes pulseLove {
      0% { background-color: #ff4081; }
      50% { background-color: #e91e63; }
      100% { background-color: #ff4081; }
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);
}

function setupFallingPetals() {
  const petalContainer = document.getElementById("falling-petals");
  const petalCount = 30;
  const petalColors = ["#ffb6c1", "#ffc0cb", "#fadde1", "#fea3aa", "#ff8da1"];

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.backgroundColor =
      petalColors[Math.floor(Math.random() * petalColors.length)];
    petal.style.animationDuration = `${Math.random() * 5 + 10}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    petalContainer.appendChild(petal);
  }

  // Add the petal animation
  const keyframes = `
    @keyframes petalFall {
      0% {
        transform: translateY(-20px) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

  // Start the animation for each petal
  const petals = document.querySelectorAll(".petal");
  petals.forEach((petal) => {
    petal.style.animation = `petalFall ${petal.style.animationDuration} ease-in-out ${petal.style.animationDelay} infinite`;
  });
}

function setupGiftBox() {
  const giftBox = document.getElementById("gift-box");
  const giftLid = document.querySelector(".gift-lid");

  giftBox.addEventListener("click", function () {
    // Open the gift box
    giftLid.style.transform = "translateY(-50px) rotate(-20deg)";

    // Release hearts and confetti
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const emoji = ["❤️", "💖", "💕", "✨", "🎁", "💝"][
          Math.floor(Math.random() * 6)
        ];

        const gift = document.createElement("div");
        gift.textContent = emoji;
        gift.style.position = "absolute";
        gift.style.fontSize = "1.5rem";
        gift.style.top = "50%";
        gift.style.left = "50%";
        gift.style.transform = "translate(-50%, -50%)";
        gift.style.zIndex = "100";
        gift.style.opacity = "0";

        // Random direction for the gifts to fly out
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        gift.style.animation = `giftExplode 2s forwards`;

        const keyframes = `
          @keyframes giftExplode {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            10% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0); opacity: 0; }
          }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);

        giftBox.appendChild(gift);

        // Remove after animation
        setTimeout(() => {
          gift.remove();
          styleSheet.remove();
        }, 2000);
      }, i * 100);
    }

    // Show a special message
    setTimeout(() => {
      const message = document.querySelector(".gift-message");
      message.style.transform = "translateY(0)";
      message.style.opacity = "1";
    }, 1000);
  });
}

function setupFloatingLoveMessage() {
  const loveMessage = document.getElementById("floating-love-message");

  // Make the love message move randomly across the screen
  setInterval(() => {
    const x = Math.random() * 70 + 15; // Keep within 15% to 85% of screen width
    const y = Math.random() * 70 + 15; // Keep within 15% to 85% of screen height

    loveMessage.style.transition = "all 3s ease-in-out";
    loveMessage.style.left = `${x}%`;
    loveMessage.style.top = `${y}%`;
  }, 4000);

  // Make it clickable - show a different message each time
  const loveMessages = [
    "You are my sunshine! ☀️",
    "Forever yours! 💘",
    "You make me smile! 😊",
    "My heart belongs to you! 💓",
    "You are my everything! 💯",
    "My favorite person! 👑",
  ];

  let currentMessageIndex = 0;

  loveMessage.addEventListener("click", function () {
    currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;

    // Hearts animation around the message
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.textContent = "❤️";
        heart.style.position = "absolute";
        heart.style.fontSize = "1rem";
        heart.style.top = "50%";
        heart.style.left = "50%";
        heart.style.transform = "translate(-50%, -50%)";
        heart.style.opacity = "0";
        heart.style.zIndex = "-1";

        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 40;
        const y = Math.sin(angle) * 40;

        heart.style.animation = `floatingMessageHeart 2s forwards`;

        const keyframes = `
          @keyframes floatingMessageHeart {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            20% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0); opacity: 0; }
          }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);

        this.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
          heart.remove();
          styleSheet.remove();
        }, 2000);
      }, i * 100);
    }

    // Update the message text
    const messageText = loveMessages[currentMessageIndex];

    // Clear and retype the message
    this.innerHTML = `<i class="fas fa-heart"></i> ${messageText} <i class="fas fa-heart"></i>`;

    // Scale animation
    this.style.transform = "scale(1.2)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 500);
  });
}

// Add CSS keyframes dynamically at startup for all animations
function addGlobalKeyframes() {
  const keyframesStyles = `
 @keyframes float {
   0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
   100% { transform: translate(-50%, -150%) scale(0); opacity: 0; }
 }
 
 @keyframes customFloat {
   0% { transform: scale(0) rotate(0deg); opacity: 0; }
   20% { transform: scale(1.5) rotate(20deg); opacity: 1; }
   80% { transform: scale(1) rotate(-20deg); opacity: 1; }
   100% { transform: scale(0) rotate(0deg); opacity: 0; }
 }
 
 @keyframes heartShower {
   0% { transform: translateY(0) rotate(0deg); opacity: 0; }
   10% { opacity: 1; }
   100% { transform: translateY(300px) rotate(360deg); opacity: 0; }
 }
 
 @keyframes confettiFall {
   0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
   100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
 }
 
 @keyframes confettiRotate {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
 }
 
 @keyframes flicker {
   0% { opacity: 1; }
   50% { opacity: 0.5; }
   100% { opacity: 1; }
 }
 
 @keyframes fadeIn {
   0% { opacity: 0; }
   100% { opacity: 1; }
 }
 
 @keyframes pulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.1); }
   100% { transform: scale(1); }
 }
`;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframesStyles;
  document.head.appendChild(styleSheet);
}

// Call the function to add global keyframes
addGlobalKeyframes();
