
// $(document).on("click", "#addBurger", function(){
//     var burgerValue = $("#bur").val()
//     console.log(burgerValue)   
//     $.ajax({
//         url: "/api/burgers",
//         method: "POST",
//         data:{
//             burger_name: burgerValue,
//             devoured: false

//         }
//     }).then(function (res){
//         console.log(res)
//     })
// })
// $("#addBurger").click(function(){
//     $.get("#bur", function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//     });
// });


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#addBurger").on("click", function(event) {
      var id = $(this).data("id");
      var isDevoured = $(this).data("isDevoured");
  
      var isdevouredState = {
        devoured: isDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isdevouredState
      }).then(
        function() {
          console.log("changed burger status to", isDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bur").val().trim(),
        devoured: $("[name=burger]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: isDevoured
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  