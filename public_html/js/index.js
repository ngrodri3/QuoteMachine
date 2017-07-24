$(document).ready(function(){
  var currentQuote = "";
  var currentAuthor ="";
  $(".main-title").hover(
    function(){
      $(this).fadeTo("slow", 0.5);
    },
    function(){
      $(this).fadeTo("slow", 1);
    }
  
  );
    $("#twitter-button").hover(
    function(){
      $(this).fadeTo("slow", 0.5);
    },
    function(){
      $(this).fadeTo("slow", 1);
    }
  
  );
  
});
$('#get-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        myFunction(post.title);
        $('#author').text(post.title + " once said");
        $('#quote-main').html(post.content);
        currentQuote = post.content;
        currentAuthor = post.title;
$("#limit").css({
    height: $("#div").height()
});
        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $().html('Source:' + post.custom_meta.Source);
        } else {
          $().text('');
        }
      },
      cache: false
    });
  

});

   $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

function myFunction($author){
  if ($author.length > 10){
    $("#quote-text").css("font-family","Acme");
  }
}