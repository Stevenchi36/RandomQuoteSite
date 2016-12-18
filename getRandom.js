//Add to this for tweet
//https://twitter.com/intent/tweet?text=
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getRandomQuote = function(data) {
  var quote = data.quoteText;
  quote = quote.trim();
  var author = data.quoteAuthor;
  $(".quote").text('"' + quote + '"');
  if(author === ''){
    $(".author").text("Unknown");
  }
  else{
    $(".author").text("- " + author);
  }
  var link = 'https://twitter.com/intent/tweet?text=' + '"' + quote + '"' + ' -' + author;
  $(".tweetIt").attr("href", link);
}

$(document).ready(function() {
  $.getJSON(url, getRandomQuote, 'jsonp');
});

$('#genNew').click(function(){
    $.getJSON(url, getRandomQuote, 'jsonp');
});