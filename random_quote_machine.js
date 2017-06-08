$(document).ready(function() {
  $("#hover_here").hover(function() {
    $("header").animate({ top: "50" });
    $("article").slideDown("slow");
    $(this).remove();
    $("footer").css({"margin-top":"-60px", "visibility":"visible"});
    $("intro").show();
    $("#twitter").hide();
  });

  var quote, author, image;

  function showQuote() {
    
    // Object constructor
    function info(quote, author, imageUrl) {
      this.quote = quote;
      this.author = author;
      this.imageUrl = imageUrl;
    }

    // Instances of the object constructor
    var ford = new info(
      "If you have a difficult task to do, give it to a lazy man and he will find an easier way to do it.",
      "Henry Ford",
      "https://res.cloudinary.com/www-virgin-com/virgin-com-prod/sites/virgin.com/files/Articles/Getty/henry_ford_one_getty.jpg"
    );

    var einstein = new info(
      "We cannot solve our problems with the same kind of thinking we used to create them.",
      "Albert Einstein",
      "https://fc05.deviantart.net/fs70/f/2012/361/1/6/albert_einstein_by_zuzahin-d5pcbug.jpg"
    );

    var corleone = new info(
      "I will make him an offer he can't refuse.",
      "Don Corleone, The Godfather",
      "https://imperialtalker.files.wordpress.com/2016/06/don-corleone.jpg?w=212&h=293"
    );

    var fuller = new info(
      "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
      "R. Buckminster Fuller",
      "https://fullerfuture.files.wordpress.com/2015/01/buckminsterfuller-bustportrait-blackandwhite.jpg"
    );

    var fresco = new info(
      "If you think we can't change the world, it just means you are not one of those that will.",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );

    var twain = new info(
      "The man who does not read has no advantage over the man who cannot read.",
      "Mark Twain",
      "https://www.marktwainhouse.org/admin/assets/images/photo_gallery/1289926514-Mark%20Twain.jpg"
    );

    var denzel = new info(
      "If you don’t read the newspaper you are uninformed, if you do read it you are misinformed.\nWhat is the long-term effect of too much information? One of the effects is the need to be first not even to be true anymore.",
      "Denzel Washington",
      "https://s-media-cache-ak0.pinimg.com/originals/2f/72/41/2f72417d5d6a580ab37a4d925c9e3a8d.jpg"
    );

    var tesla = new info(
      "If your hate could be turned into electricity, it would light up the whole world.",
      "Nikola Tesla",
      "https://www-tc.pbs.org/prod-media/newshour/photos/2013/07/10/Tesla_circa_1890_slideshow.jpeg"
    );

    var shaw = new info(
      "Be ware of false knowledge, it is more dangerous than ignorance.",
      "George Bernard Shaw",
      "https://flatearthperspectives.files.wordpress.com/2016/06/george_bernard_shaw.jpg"
    );

    var curie = new info(
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
      "Marie Curie",
      "https://static.wixstatic.com/media/a3c20d_ae114eb1f5214e74876cbd86621e0b26.jpg"
    );

    var newton = new info(
      "Men build too many walls and not enough bridges",
      "Isaac Newton",
      "https://3.bp.blogspot.com/-Ifta23Hfk3I/V6E3LYheeZI/AAAAAAAAAQI/4mcKA3O90PcxFugOU4Pmtb-Mq6cpZ512wCLcB/s1600/newton.jpg"
    );

    var neil = new info(
      "We spend the first years of our children's life teaching them to walk and to talk and the rest of their lives to shut up and sit down.",
      "Neil deGrasse Tyson",
      "https://parade.com/wp-content/uploads/2014/01/1-12-14-Neil-deGrasse-Tyson-inside-main-ftr.jpg"
    );

    var truman = new info(
      "Good morning and in case I don't see ya, good afternoon, good evening and good night.",
      "Truman, The Truman Show",
      "https://kaist455.files.wordpress.com/2012/02/truman03.jpg"
    );

    var king = new info(
      "If you can't fly, run, if you can't run, then walk, if you can't walk, then crawl, but whatever you do, you have to keep moving forward.",
      "Martin Luther King",
      "https://thepdcafe.com/wp-content/uploads/2017/02/martin-luther-king-jr-colour-1-440x264.jpg"
    );

    var fresco2 = new info(
      "I believe if you want to live in a better world, you have to get off your ass and make it better.",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );

    var fresco3 = new info(
      "There are no negro problems, or polish problems, or jewish problems, or greek problems, or women's problems, there are Human problems.",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );

    var neil2 = new info(
      "We spend more time congratulating people who have succeeded than encouraging people who have not.",
      "Neil deGrasse Tyson",
      "https://parade.com/wp-content/uploads/2014/01/1-12-14-Neil-deGrasse-Tyson-inside-main-ftr.jpg"
    );

    var ferrel = new info(
      "Before you marry a person you should first make them use a computer with slow internet to see who they really are.",
      "Will Ferrel",
      "https://haveyourview.com/wp-content/uploads/2016/09/ferrell-1111.jpg"
    );

    var gandhi = new info(
      "What do you think of Western civilisation? I think it would be a good idea.",
      "Mahatma Gandhi",
      "https://biografieonline.it/img/bio/m/Mahatma_Gandhi.jpg"
    );

    var fresco4 = new info(
      "What do you think of religion? I think it's a great idea, when are they putting it into practice?",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );

    var confucius = new info(
      "When a wise man points at the moon the imbecile examines the finger.",
      "Confucius",
      "https://sirius1-bg.net/sirius/images/stories/sirius/likove/images/konfutc.jpg"
    );

    var fresco5 = new info(
      "There is no shortage of anything, except brains in Washington.",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );
    
    var fresco6 = new info(
      "You can either have one guy lifting a billion pounds by himself, and it takes many years of planning and preparation, or you can have a billion people, each lifting one pound, and it takes a mere moment.\n That's the power of unity.",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );
    
    var fresco7 = new info(
      "The difference between a serial killer and a saint is environment.\n That's a very hard thing to accept because that raises a lot of questions.",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );
    
    var fresco8 = new info(
      "The minute you hear \"Freedom\" and \"Democracy\" watch out... because in a truly free nation, no one has to tell you that you're free.",
      "Jacque Fresco",
      "https://www.henrymakow.com/fresno1.jpg"
    );
    
    var einstein2 = new info(
      "The only source of knowledge is experience",
      "Albert Einstein",
   "https://fc05.deviantart.net/fs70/f/2012/361/1/6/albert_einstein_by_zuzahin-d5pcbug.jpg"
    );
    
    // add bob marley - money is numbers quote

    // Storage of the object instances
    var profileInfo = [ford, einstein, corleone, fuller, fresco, twain, denzel, tesla, shaw, curie, newton, neil, truman, king, fresco2, fresco3, neil2, ferrel, gandhi, fresco4, confucius, fresco5, fresco6, fresco7, fresco8, einstein2];

    // Outputs random numbers
    var random = Math.floor(Math.random() * profileInfo.length);

    quote = profileInfo[random].quote;
    author = profileInfo[random].author;
    image = profileInfo[random].imageUrl;
    
    // Displays data
    $("#img").html("<div class='container'><img src='" + image + "'class='img'></div>");
    $("#quote").text(quote).append("<br><i class='fa fa-quote-right'></i>");
    $("#name").text(author);
  }
  
  // Change image, name of author and quote on every user click
  $("#getQuote").on("click", function() {
    var quoteValue = document.getElementById("getQuote").innerHTML;
    quoteValue = " New Quote";
    $(this).html("" + quoteValue + "");
    $("#intro").hide();
    $("#twitter").show();
    showQuote();
  });
  
  // Tweets quote and author's name
  $("#twitter").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + author);
  });
});