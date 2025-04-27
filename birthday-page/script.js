document.addEventListener('DOMContentLoaded', function() {
    initHearts();
    initCountdown();
    initMusicPlayer();
    initMemoryBoxes();
    initWishButton();
    initGiftBox();
    
    // This is the key function that needs to work properly
    hideAllContentExceptCountdown();
    
    document.getElementById('timer').style.opacity = '0';
    document.getElementById('timer').style.transition = 'opacity 1.5s ease-in-out';
    
    setTimeout(() => {
        document.getElementById('timer').style.opacity = '1';
    }, 300);
});

function hideAllContentExceptCountdown() {
    // First, properly hide all sections except the timer
    const allContent = document.querySelectorAll('header, .letter, .memories, .reasons, .wishes, .cake-section, .final-message, .gift-box, footer');
    
    allContent.forEach(section => {
        section.style.display = 'none';
    });
    
    // Style the timer to be centered and visible
    const timer = document.getElementById('timer');
    timer.style.position = 'fixed';
    timer.style.top = '50%';
    timer.style.left = '50%';
    timer.style.transform = 'translate(-50%, -50%)';
    timer.style.padding = '50px';
    timer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    timer.style.borderRadius = '20px';
    timer.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
    timer.style.zIndex = '1000';
    timer.style.width = '80%';
    timer.style.maxWidth = '600px';
}

function showAllContent() {
    const allContent = document.querySelectorAll('header, .letter, .memories, .reasons, .wishes, .cake-section, .final-message, .gift-box, footer');
    
    allContent.forEach((section, index) => {
        setTimeout(() => {
            section.style.display = '';
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 100);
        }, index * 300);
    });
    
    createConfetti();
    
    const audio = document.getElementById('background-music');
    if (audio) {
        audio.play().catch(e => console.log("Audio couldn't autoplay:", e));
    }
    
    setTimeout(() => {
        alert("🎉 Happy Birthday! 🎂 Welcome to your special celebration page!");
    }, 1000);
}

function removeCountdown() {
    const timer = document.getElementById('timer');
    
    timer.style.opacity = '0';
    
    setTimeout(() => {
        timer.style.display = 'none';
        document.body.style.paddingTop = '0';
    }, 1000);
}

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let birthdayDate = new Date('May 21, 2025 00:00:00').getTime();

function checkIfBirthday() {
    const today = new Date();
    const birthday = new Date(birthdayDate);
    
    return today.getDate() === birthday.getDate() && 
           today.getMonth() === birthday.getMonth();
}

let countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    let distance = birthdayDate - now;
    
    if (distance <= 0 || checkIfBirthday()) {
        clearInterval(countdownInterval);
        
        document.getElementById('days').innerText = '0';
        document.getElementById('hours').innerText = '0';
        document.getElementById('minutes').innerText = '0';
        document.getElementById('seconds').innerText = '0';
        
        const timer = document.getElementById('timer');
        const message = document.createElement('h3');
        message.innerText = "🎉 It's time to celebrate! 🎂";
        message.style.color = '#d81e5b';
        message.style.marginTop = '20px';
        message.style.animation = 'pulse 1s infinite';
        timer.appendChild(message);
        
        // Wait a moment then show the content
        setTimeout(() => {
            removeCountdown();
            showAllContent();
        }, 3000);
        
        return;
    }
    
    // Update the countdown timer
    document.getElementById('days').innerText = Math.floor(distance / day);
    document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
    document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
    document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);
}, second);

// Rest of existing functions

function initHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const colors = ['#d81e5b', '#e83e8c', '#ff6b6b', '#ffb8b8', '#ffffff'];
    const sizes = [15, 20, 25, 30, 35];
    
    setInterval(() => {
        createHeart(heartsContainer, colors, sizes);
    }, 300);
}

function createHeart(container, colors, sizes) {
    const heart = document.createElement('div');
    
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.className = 'floating-heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '0px';
    heart.style.fontSize = `${size}px`;
    heart.style.color = color;
    heart.style.position = 'absolute';
    heart.style.opacity = '0';
    heart.style.animation = `floatHeart ${Math.random() * 5 + 8}s linear forwards`;
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 13000);
}

function initMusicPlayer() {
    const musicButton = document.getElementById('music-toggle');
    const music = document.getElementById('background-music');
    const statusText = document.querySelector('.music-status');
    let musicPlaying = false;
    
    musicButton.addEventListener('click', function() {
        if (musicPlaying) {
            music.pause();
            statusText.textContent = "";
            musicButton.querySelector('i').className = "fas fa-music";
        } else {
            music.play().catch(error => {
                console.log("Audio play failed:", error);
                alert("Please interact with the page first to enable audio!");
            });
            statusText.textContent = "";
            musicButton.querySelector('i').className = "fas fa-pause";
        }
        musicPlaying = !musicPlaying;
    });
}

function initMemoryBoxes() {
    const memoryBoxes = document.querySelectorAll('.memory-box');
    
    memoryBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        box.addEventListener('mouseout', function() {
            this.style.transform = '';
        });
    });
}

function initWishButton() {
    const wishButton = document.getElementById('make-wish');
    const flame = document.querySelector('.flame');
    
    wishButton.addEventListener('click', function() {
        flame.style.opacity = '0';
        
        createConfetti();
        
        setTimeout(() => {
            alert("Your wish has been sent to the universe! May it come true quickly! ✨");
            
            setTimeout(() => {
                flame.style.opacity = '1';
            }, 2000);
        }, 500);
    });
}

function createConfetti() {
    const colors = ['#d81e5b', '#e83e8c', '#ff6b6b', '#ffb8b8', '#ffd700', '#fff9c4'];
    
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.zIndex = '1000';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.top = '50%';
        confetti.style.left = '50%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        const destinationX = (Math.random() - 0.5) * window.innerWidth;
        const destinationY = (Math.random() - 0.5) * window.innerHeight;
        const rotation = Math.random() * 520;
        const scale = Math.random() * 0.8 + 0.2;
        
        confetti.animate(
            [
                { transform: 'translate(-50%, -50%) rotate(0) scale(0)' },
                { transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) rotate(${rotation}deg) scale(${scale})` }
            ],
            {
                duration: Math.random() * 2000 + 1000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
                fill: 'forwards'
            }
        );
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function initGiftBox() {
    const giftBox = document.getElementById('gift-box');
    const modal = document.getElementById('surprise-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    giftBox.addEventListener('click', function() {
        modal.style.display = 'flex';
        
        const modalContent = document.querySelector('.modal-content');
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '<i class="fas fa-heart"></i>';
                heart.style.position = 'absolute';
                heart.style.color = '#d81e5b';
                heart.style.fontSize = `${Math.random() * 20 + 10}px`;
                heart.style.top = `${Math.random() * 100}%`;
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.opacity = '0';
                heart.style.zIndex = '-1';
                
                modalContent.appendChild(heart);
                
                heart.animate(
                    [
                        { opacity: 0, transform: 'translateY(20px) scale(0)' },
                        { opacity: 1, transform: 'translateY(0) scale(1)' },
                        { opacity: 0, transform: 'translateY(-20px) scale(0)' }
                    ],
                    {
                        duration: 2000,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    }
                );
                
                setTimeout(() => {
                    heart.remove();
                }, 2000);
                
            }, i * 100);
        }
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    
    setInterval(() => {
        giftBox.animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(-15px)' },
                { transform: 'translateY(0)' }
            ],
            {
                duration: 1000,
                easing: 'ease-in-out'
            }
        );
    }, 5000);
}

function createSparkleElement(parentElement) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = `${Math.random() * 15 + 10}px`;
    sparkle.style.left = `${Math.random() * parentElement.offsetWidth}px`;
    sparkle.style.top = `${Math.random() * parentElement.offsetHeight}px`;
    sparkle.style.opacity = '0';
    sparkle.style.zIndex = '5';
    sparkle.style.pointerEvents = 'none';
    
    parentElement.appendChild(sparkle);
    
    sparkle.animate(
        [
            { opacity: 0, transform: 'scale(0) rotate(0deg)' },
            { opacity: 1, transform: 'scale(1) rotate(180deg)' },
            { opacity: 0, transform: 'scale(0) rotate(360deg)' }
        ],
        {
            duration: 1500,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
    
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

// Only run sparkle animation when content is visible
let sparkleInterval = null;

function startSparkleAnimations() {
    if (sparkleInterval) return; // Don't start if already running
    
    sparkleInterval = setInterval(() => {
        const title = document.querySelector('.title');
        if (title && title.offsetHeight > 0) createSparkleElement(title);
        
        const possibleElements = [
            '.birthday-badge',
            '.cake',
            '.letter h2',
            '.final-message h2'
        ];
        
        const selector = possibleElements[Math.floor(Math.random() * possibleElements.length)];
        const randomElement = document.querySelector(selector);
        
        if (randomElement && randomElement.offsetHeight > 0) {
            createSparkleElement(randomElement);
        }
    }, 800);
}

// Call startSparkleAnimations only after countdown is done
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && document.getElementById('timer').style.display === 'none') {
        startSparkleAnimations();
    } else {
        clearInterval(sparkleInterval);
        sparkleInterval = null;
    }
});