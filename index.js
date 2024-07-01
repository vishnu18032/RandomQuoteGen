const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."
];

const usedIndexes = new Set();
const quoteTag = document.getElementById("quote");

function generateQuote() {
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);


        if(usedIndexes.size >= quotes.length){
            usedIndexes.clear();
        }

        if (usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        quoteTag.innerHTML = quote;
        usedIndexes.add(randomIdx);

        // Break the loop once a new quote is displayed
        break;
    }
}
