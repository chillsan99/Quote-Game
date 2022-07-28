let quote = {
    
    fetchQuote: function(){
        fetch(
        "https://animechan.vercel.app/api/quotes"
        )
    .then((response) => response.json())
    .then((quotes) => this.displayQuote(quotes))
    },

    displayQuote: function(quotes){
        const number = Math.floor(Math.random() * 11 );
        const { quote } = quotes[number];
        const { anime } = quotes[number]
        
        document.querySelector(".title").innerText = anime;
        document.querySelector(".quote").innerText = '"'+ quote + '"';
        document.querySelector(".quote").classList.remove("loading");
    },

}

document.querySelector(".search button").addEventListener("click", function(){
    quote.fetchQuote();
});


quote.fetchQuote();
