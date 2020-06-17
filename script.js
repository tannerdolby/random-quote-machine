const project = {
    name: "Random Quote Machine",
    author: "Tanner Dolby"
}
localStorage.setItem("projectName", project.name);

const animateColors = [
    "#1ABC9C",
    "#E74C3C",
    "#F39C12",
    "#28B463",
    "#273746",
    "#F7DC6F",
    "#CD6155",
    "#ABEBC6",
    "#DC7633",
    "#333",
    "#3498DB",
    "#D35400",

]

// Quotes - credit for quotes goes to @freeCodeCamp 
const quotesObj = {
    0: {
        quote: "There are far, far better things ahead than any we leave behind.",
        author: "C.S. Lewis"
    },
    1: {
        quote: "Find what you love and let it kill you.",
        author: "Charles Bukowski"
    },
    2: {
        quote: "If you have everything under control, you're not moving fast enough.",
        author: "Mario Andretti"
    },
    3: {
        quote: "A good traveler has no fixed plans and is not intent on arriving.",
        author: "Lao Tzu"
    },
    4: {
        quote: "Light tomorrow with today.",
        author: "Elizabeth Barret Browning"
    },
    5: {
        quote: "Education is not the filling of a pail, but the lighting of a fire.",
        author: "William Butler Yeats"
    },
    6: {
        quote: "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
        author: "Confucius"
    },
    7: {
        quote: "By seeking and blundering we learn.",
        author: "Johann Wolfgang von Goethe"
    },
    8: {
        quote: "The power of imagination makes us infinite.",
        author: "John Muir"
    },
    9: {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    10: {
        quote: "The harder I work, the luckier I get.",
        author: "Gary Player"
    },
    11: {
        quote: "People will kill you over time, and how they'll kill you is with tiny, harmless phrases, like \'be realistic\'.",
        author: "Dylan Moran"
    },
    12: {
        quote: "I attribute my success to this - I never gave or took any excuse.",
        author: "Florence Nightingale"
    },
    13: {
        quote: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
        author: "Albert Einstein"
    },
    14: {
        quote: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino"
    },
    15: {
        quote: "Creativity is intelligence having fun.",
        author: "Albert Einstein"
    },
    16: {
        quote: "All we are not stares back at what we are.",
        author: "W.H. Auden"
    },
    17: {
        quote: "The cure for pain is in the pain.",
        author: "Rumi"
    },
    18: {
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill"
    },
    19: {
        quote: "Believe you can and you're halfway there.",
        author: "Ernest Hemingway"
    },
    20: {
        quote: "Keep your face always toward the sunsine - and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    21: {
        quote: "Can you imagine what I would do if I could do all I can?",
        author: "Sun Tzu"
    }
}

const pageWrapper = document.getElementsByClassName("page-wrapper")[0];
const quoteElement = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

let getRandomIndex = (startIndex, endIndex) => {
    startIndex = Math.ceil(startIndex);
    endIndex = Math.floor(endIndex);
    return Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex
}

let getRandomQuote = () => {
    let random = getRandomIndex(0, 21)
    quoteElement.textContent = quotesObj[random].quote;
    quoteAuthor.textContent = `- ${quotesObj[random].author}`;
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("page-wrapper")[0].style.background = animateColors[0];
    getRandomQuote();
    newQuoteBtn.onclick = () => {
        getRandomQuote();
        let rand = getRandomIndex(0, 12);
        pageWrapper.style.background = animateColors[rand];
        pageWrapper.style.transition = "background-color 1000ms linear";
    }
    tweetBtn.onclick = () => {
        tweetBtn.href = `https://twitter.com/intent/tweet?text="${quoteElement.textContent}" ${quoteAuthor.textContent}`;
    }
});