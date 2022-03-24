const quotes = [
    {
        quote: "오늘 할일을 내일로 미루지 말자.",
        author: "벤자민 프랭클린(Benjamin Franklin)",
    },
    {
        quote: "교묘하게 속이는 것보다도 서투르지만 성실한게 좋다",
        author: "한비자",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;