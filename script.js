const answers_no = {
    english: [
    "No",
    "Are you sure?",
    "Are you really sure?",
    "Are you really really sure?",
    "Think again plss",
    "Maybe we can talk about it?",
    "I'm not going to ask again",
    ":((((",
    "Ok, Lets just start over..."
    ],
    indo: [
    "Ngga",
    "Serius?",
    "Seriusan gamau?",
    "Serius kahhh?",
    "Pikir lagi dehhh",
    "Mungkin bisa kita omongin baik-baik?",
    "Aku gamau tanya lagiii",
    ":((((",
    "Yaudaa, kita ulangi yaaa...",
    ]
}; 

answers_yes = {
    "english": "Yes",
    "indo": "Iyaa"
}

let language = "english";
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "D:/Valentine project/no.gif";
        refreshBanner();
    }
    clicks++;

    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "D:/Valentine project/yes.gif";
    refreshBanner();

    let button = document.getElementsByClassName('button')[0];
    button.style.display = "none";

    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage

    const questionHeading = document.getElementById("question");
    if (language === "indo") {
        questionHeading.textContent = "Mau ga kamu jadi valentine ku?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    yes_button.innerHTML = answers_yes[language];

    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    const successMessage = document.getElementById("success");
    if (language === "indo") {
        successMessage.textContent = "Yeyyy, Love youu sayangg"
    } else {
        successMessage.textContent = "Yeeyyy, Lovee Youuu :3"
    }
}