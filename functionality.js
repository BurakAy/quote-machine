$(document).ready(function(){
  var counter = 0;
  
    $("#newquote").click(function(){
      
      var quotes = [
        {"quote":"Learning never exhausts the mind.", "author":"Leonardo da Vinci"}, 
        {"quote":"Life is really simple, but we insist on making it complicated.", "author":"Confucius"}, 
        {"quote":"Life isn't about finding yourself. Life is about creating yourself.", "author":"George Bernard Shaw"}, 
        {"quote":"Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.", "author":"Oscar Wilde"},
        {"quote":"Simplicity is the ultimate sophistication.", "author":"Leonardo da Vinci"},
        {"quote":"A creative man is motivated by the desire to achieve, not by the desire to beat others.", "author":"Ayn Rand"}, 
        {"quote":"The secret of getting ahead is getting started.", "author":"Mark Twain"}, 
        {"quote":"Tears come from the heart, not from the brain.", "author":"Leonardo da Vinci"},
        {"quote":"Quality is not an act, it is a habit.", "author":"Aristotle"}
      ];
      
      var aQuote = quotes[counter].quote;
      var anAuthor = quotes[counter].author;
      
      $("#quote-text").text(aQuote);
      $("#quote-footer").text(anAuthor);
   
      counter++;

      if (counter >= quotes.length){
        counter = 0;
      }
      
    });
  
    $("#tweet").click(function(){
        window.open("https://twitter.com/intent/tweet?text=" + "\"" + $("#quote-text").text() + "\"" + " - " + $("#quote-footer").text() + "&via=ImBurakAydemir");
    });
  
});