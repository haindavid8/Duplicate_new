export default function handler(req, res) {
  const quotes = [
    { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" }
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.status(200).json(quotes[randomIndex]);
}

