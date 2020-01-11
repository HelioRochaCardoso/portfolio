/* "use strict"; */
/* eslint-env jquery */
$(document).ready(function() {
    $("#hover_here").hover(function() {
        $("#title").animate({ top: "50px" });
        $("#body").slideDown("slow");
        $(this).hide();
        $("intro").show();
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
            "If you have a difficult task to do, give it to a lazy man and he will find an easier way to do it",
            "Henry Ford",
            "images/random_quote_images/henry_ford.jpg"
        );

        var einstein = new info(
            "We cannot solve our problems with the same kind of thinking we used to create them",
            "Albert Einstein",
            "images/random_quote_images/albert_einstein.jpg"
        );

        var corleone = new info(
            "I will make him an offer he can't refuse",
            "Don Corleone, The Godfather",
            "images/random_quote_images/don_corleone.jpg"
        );

        var fuller = new info(
            "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete",
            "R. Buckminster Fuller",
            "images/random_quote_images/buckminster_fuller.jpg"
        );

        var fresco = new info(
            "If you think we can't change the world, it just means you are not one of those that will",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var twain = new info(
            "The man who does not read has no advantage over the man who cannot read",
            "Mark Twain",
            "images/random_quote_images/mark_twain.jpg"
        );

        var denzel = new info(
            "If you don’t read the newspaper you are uninformed, if you do read it you are misinformed.\nWhat is the long-term effect of too much information? One of the effects is the need to be first not even to be true anymore",
            "Denzel Washingtimages/random_quote_imageson",
            "images/random_quote_images/denzel_washington.jpg"
        );

        var tesla = new info(
            "If your hate could be turned into electricity, it would light up the whole world",
            "Nikola Tesla",
            "images/random_quote_images/nikola_tesla.jpeg"
        );

        var shaw = new info(
            "Be ware of false knowledge, it is more dangerous than ignorance",
            "George Bernard Shaw",
            "images/random_quote_images/george_bernard_shaw.jpg"
        );

        var curie = new info(
            "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less",
            "Marie Curie",
            "images/random_quote_images/marie_curie.jpg"
        );

        var newton = new info(
            "Men build too many walls and not enough bridges",
            "Isaac Newton",
            "images/random_quote_images/isaac_newton.jpg"
        );

        var neil = new info(
            "We spend the first years of our children's life teaching them to walk and to talk and the rest of their lives to shut up and sit down",
            "Neil deGrasse Tyson",
            "images/random_quote_images/neil_degrasse_tyson.jpg"
        );

        var truman = new info(
            "Good morning and in case I don't see ya, good afternoon, good evening and good night",
            "Truman, The Truman Show",
            "images/random_quote_images/truman_show.jpg"
        );

        var king = new info(
            "If you can't fly, run, if you can't run, then walk, if you can't walk, then crawl, but whatever you do, you have to keep moving forward",
            "Martin Luther King",
            "images/random_quote_images/martin_luther_king.jpg"
        );

        var fresco2 = new info(
            "I believe if you want to live in a better world, you have to get off your ass and make it better",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var fresco3 = new info(
            "There are no negro problems, or polish problems, or jewish problems, or greek problems, or women's problems, there are Human problems",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var neil2 = new info(
            "We spend more time congratulating people who have succeeded than encouraging people who have not",
            "Neil deGrasse Tyson",
            "images/random_quote_images/neil_degrasse_tyson.jpg"
        );

        var ferrel = new info(
            "Before you marry a person you should first make them use a computer with slow internet to see who they really are",
            "Will Ferrel",
            "images/random_quote_images/will_ferrell.jpg"
        );

        var gandhi = new info(
            "What do you think of Western civilisation? I think it would be a good idea",
            "Mahatma Gandhi",
            "images/random_quote_images/gandhi.jpg"
        );

        var fresco4 = new info(
            "What do you think of religion? I think it's a great idea, when are they putting it into practice?",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var confucius = new info(
            "When a wise man points at the moon the imbecile examines the finger",
            "Confucius",
            "images/random_quote_images/confucius.jpg"
        );

        var fresco5 = new info(
            "There is no shortage of anything, except brains in Washington",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var fresco6 = new info(
            "You can either have one guy lifting a billion pounds by himself, and it takes many years of planning and preparation, or you can have a billion people, each lifting one pound, and it takes a mere moment.\n That's the power of unity",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var fresco7 = new info(
            "The difference between a serial killer and a saint is environment.\n That's a very hard thing to accept because that raises a lot of questions",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var fresco8 = new info(
            "The minute you hear \"Freedom\" and \"Democracy\" watch out... because in a truly free nation, no one has to tell you that you're free",
            "Jacque Fresco",
            "images/random_quote_images/jacque_fresco.jpg"
        );

        var einstein2 = new info(
            "The only source of knowledge is experience",
            "Albert Einstein",
            "images/random_quote_images/albert_einstein.jpg"
        );

        var bob_marley = new info(
            "Money is numbers and numbers never end. If it takes money to be happy, your search for happiness will never end",
            "Bob Marley",
            "images/random_quote_images/bob_marley.jpg"
        );

        // Stores object instances
        var profileInfo = [ford, einstein, corleone, fuller, fresco, twain, denzel, tesla, shaw, curie, newton, neil, truman, king, fresco2, fresco3, neil2, ferrel, gandhi, fresco4, confucius, fresco5, fresco6, fresco7, fresco8, einstein2, bob_marley];

        // Outputs random numbers
        var random = Math.floor(Math.random() * profileInfo.length);

        quote = profileInfo[random].quote;
        author = profileInfo[random].author;
        image = profileInfo[random].imageUrl;

        // Displays data
        $("#img").html("<img src='" + image + "'class='img img-responsive'>").addClass("img");
        $("#quote").text(quote).append("<br><i class='fa fa-quote-right'></i>");
        $("#name").text(author);
    }

    // Change image, name of author and quote on every user click
    $("#getQuote").one("click", function() {
        $("#intro").hide();
        $("#twitter").show();
        $("#buttons").css({
            "position": "relative",
            "top": "10px"
        });
        $("#quotes_container").css("display", "block");
        showQuote();
    });

    // subsequent clicks on New Quote button triggers new random quote
    $("#getQuote2").click(function() {
        showQuote();
    });

    // Tweets quote and author's name
    $("#twitter").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + author);
    });
});