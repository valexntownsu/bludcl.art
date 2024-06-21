let transitionActive = false;
var song = document.getElementById("song");
var current_page = "main";


//PAGE LOADING


function startHome() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector('.display-text');
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.innerHTML = getRandomSentence();
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}

function startPage() {
    const enterButton = document.getElementById("enter-container");
    enterButton.style.transition = "opacity 1s ease-in-out";
    enterButton.style.opacity = 0;

    setTimeout(() => {
        setTimeout(() => {
            const memberButtons = document.getElementById("member-container");
            const mainButtons = document.getElementById("main-container");
            memberButtons.style.display = "flex";
            mainButtons.style.display = "flex";

            requestAnimationFrame(() => {
                memberButtons.style.transition = "opacity 1s ease-in-out";
                memberButtons.style.opacity = 1;
                mainButtons.style.transition = "opacity 1s ease-in-out";
                mainButtons.style.opacity = 1;
            });

            enterButton.style.display = "none";
        }, 500);
    }, 1000);
    
    song.volume = 0;
    song.playbackRate = 0.85;
    song.play();

    var fadeInInterval = setInterval(function () {
        song.volume += 0.1;
        if (song.volume >= 0.7) {
            song.volume = 0.7;
            clearInterval(fadeInInterval);
        }
    }, 350);

    setTimeout(startHome, 1000);
};


//MEMBER BUTTONS

function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.style.opacity = 0;
        pfpImage.style.opacity = 0;

        setTimeout(() => {
            displayText.innerHTML = textContent;
            document.title = "@fail; " + user;
            pfpImage.src = pfpSrc;
            
            setTimeout(() => {
                displayText.style.opacity = 1;
                pfpImage.style.opacity = 1;
                transitionActive = false;
            }, 1000);

        }, 1000);
    }

    else {
        current_page = "member";
        document.title = "@fail; " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        displayText.style.opacity = 0;
        randomGif.style.opacity = 0;
        pfpImage.style.display = "block";
        randomGif.style.position = "absolute";
        randomGif.style.top = "48%";
        randomGif.style.left = "50%";
        randomGif.style.transform = "translate(-50%, -50%)";

        setTimeout(() => {
            displayText.innerHTML = textContent;
            pfpImage.src = pfpSrc;
            randomGif.style.display = "none";
            displayText.style.opacity = 1;
            pfpImage.style.opacity = 1;

            transitionActive = false;
        }, 2000);
    }
}

function lsd() {
    memberCall(
        "assets/lsd_icon.png",
        "<a href='https://solo.to/com' target='_blank' style='color: white;'>solo.to</a>",
        "lsd"
    );
}

function ghouls() {
    memberCall(
        "assets/ghouls_icon.png",
        "<a href='https://discord.com/users/1220742473320632396' target='_blank' style='color: white;'>discord</a>, <a href='https://instagram.com/hhhhhhh18137' target='_blank' style='color: white;'>instagram</a>",
        "ghouls"
        );
}

function rainku() {
    memberCall(
        "assets/rainku_icon.png",
        "<a href='https://snapchat.com/@fedthreat' target='_blank' style='color: white;'>snapchat</a>, <a href='https://instagram.com/xvurhi' target='_blank' style='color: white;'>instagram</a>, <a href='https://t.me/hadence' target='_blank' style='color: white;'>telegram</a>",
        "rainku"
    );
}

function valexnt() {
    memberCall(
        "assets/valexnt_icon.png",
        "<a href='https://discord.com/users/1166703542468358234' target='_blank' style='color: white;'>discord</a>, <a href='https://t.me/valexntt' target='_blank' style='color: white;'>telegram</a>",
        "valexnt"
    );
}

function leakage() {
    memberCall(
        "assets/leakage_icon.png",
        "",
        "leakage"
    );
}


// CORE BUTTONS


function updatePage(htmlContent, pageTitle) {
    if (transitionActive) return;
    transitionActive = true;
    
    document.title = "@fail; " + pageTitle;
    const displayText = document.querySelector(".display-text");

    if (current_page === "main") {
        displayText.style.opacity = 0;

        setTimeout(() => {
            displayText.innerHTML = htmlContent;
            displayText.style.opacity = 1;
            transitionActive = false;
        }, 2000);
    } else {
        current_page = "main";
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        displayText.style.opacity = 0;
        pfpImage.style.opacity = 0;
        randomGif.style.display = "block";
        randomGif.style.opacity = 0;
        randomGif.style.position = "absolute";
        randomGif.style.top = "48%";
        randomGif.style.left = "50%";
        randomGif.style.transform = "translate(-50%, -50%)";

        setTimeout(() => {
            displayText.innerHTML = htmlContent;
            pfpImage.style.display = "none";
            displayText.style.opacity = 1;
            randomGif.style.opacity = 1;

            transitionActive = false;
        }, 2000);
    }
}

function projects() {
    updatePage(
        "<a href='https://t.me/shopfail' target='_blank' style='color: white;'>discord username sniper</a>, <a href='https://t.me/shopfail' target='_blank' style='color: white;'>discord vanity sniper</a>",
        "projects"
    );
}

function about() {
    updatePage(
        "<a href='https://discord.gg/fail' target='_blank' style='color: white;'>@fail</a> is a cyber collective with a primary focus on coding and various other digital endeavors.",
        "about"
    );
}

function discord() {
    window.open("https://discord.gg/fail", "_blank");
}


//OTHER


function getRandomSentence() {
    const sentences = [
        "@ <a href='https://discord.gg/fail' target='_blank' style='color: white;'>fail</a>, a collective"
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

var gifs = [
    "alakazam.gif",
    "arceus.gif",
    "articuno.gif",
    "charizard.gif",
    "darkrai.gif",
    "dialga.gif",
    "dragonite.gif",
    "entei.gif",
    "garchomp.gif",
    "gardevoir.gif",
    "genesect.gif",
    "gengar.gif",
    "giratina.gif",
    "groudon.gif",
    "ho-oh.gif",
    "kyogre.gif",
    "kyurem.gif",
    "lugia.gif",
    "mewtwo.gif",
    "moltres.gif",
    "palkia.gif",
    "raikou.gif",
    "rayquaza.gif",
    "reshiram.gif",
    "scizor.gif",
    "suicune.gif",
    "tyranitar.gif",
    "venusaur.gif",
    "zapdos.gif",
    "zekrom.gif"
    ];

function setRandomGif() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var randomGif = gifs[randomIndex];
    document.getElementById("random-gif").src = "assets/" + randomGif;

    document.body.setAttribute("data-current-gif", randomGif);

    updateButtonHoverColor();
}

setRandomGif();

function updateButtonHoverColor() {
    var currentGif = document.body.getAttribute("data-current-gif");
    var buttons = document.querySelectorAll(".buttons-container button");

    buttons.forEach(function(button) {
        button.setAttribute("data-gif", currentGif);
    });
}

