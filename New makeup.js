function filterProducts() {
    //Store input text in variable searchText and turning it lowercase for better search
    var searchText = $("#searchInput").val().toLowerCase();
    //For each product div 
    $(".products").each(function () {
        //Store search text in variable productText and turning it lowercase for better search
        var productText = $(this).text().toLowerCase();
        //If search text includes input text
        if (productText.includes(searchText)) {
            //Show
            $(this).show();
        } else {
            //Hide
            $(this).hide();
        }
    });
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

$(document).ready(function() {
    $('.book-button').click(function() {
      var productName = $(this).siblings('h3').text();
      var productPrice = $(this).siblings('p').text();
      
      
      var confirmationMessage = "Do you want to sale " + productName + " for " + productPrice + "?";
      if (confirm(confirmationMessage)) {
        alert("Product booked!");
      }
    });
  });
  
  $(document).ready(function() {
    // Sample data for demonstration (replace with actual data)
    var products = [
        { name: "Lipstick", description: "Vibrant lip colors" },
        { name: "Mascara", description: "Lengthening and volumizing" },
        { name: "Foundation", description: "Flawless coverage" },
        // Add more products here
    ];
    
    // Function to perform search
    function performSearch(query) {
        var results = products.filter(function(product) {
            return product.name.toLowerCase().includes(query.toLowerCase()) ||
                   product.description.toLowerCase().includes(query.toLowerCase());
        });
        console.log(results)
        displaySearchResults(results);
    }

    // Function to display search results
    function displaySearchResults(results) {
        var resultsContainer = $(".search-results");
        resultsContainer.empty();

        if (results.length === 0) {
            resultsContainer.append("<p>No results found.</p>");
            return;
        }

        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var resultItem = $("<div>", { class: "search-result" });
            resultItem.append($("<h3>").text(result.name));
            resultItem.append($("<p>").text(result.description));
            resultsContainer.append(resultItem);
        }
    }

    // Trigger search on button click
    $("#searchButton").on("click", function() {
        var query = $("#searchInput").val();
        performSearch(query);
    });

    // Trigger search on Enter key press
    $("#searchInput").on("keypress", function(e) {
        if (e.which === 13) { // Enter key
            var query = $(this).val();
            performSearch(query);
        }
    });
});

var slide_imgs = document.querySelectorAll('#slide-img img')

var slide_infos = document.querySelectorAll('.slide-info')

var hero_imgs_animate = []

slide_imgs.forEach((e, index) => {
    var next_img = slide_imgs[index === slide_imgs.length - 1 ? 0 : index + 1].getAttribute('src')

    var animation = new hoverEffect({
        parent: document.querySelector('#slide-img'),
        intensity: 0.3,
        image1: e.getAttribute('src'),
        image2: next_img,
        displacementImage: 'images/distortion.jpg',
        hover: false
    })

    hero_imgs_animate.push(animation)
})
