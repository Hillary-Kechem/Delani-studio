$(document).ready(function () {
    $("#infor").click(function () {
    $("#hidden").toggle();
    
 });
    $("#development").click(function () {
    $("#hidden1").toggle();       
 });
    $("#product1").click(function () {
    $("#hidden2").toggle();
     });
})

$("#blackimg").hover(
    function () {
      $(this).find(".title").fadeIn(1000);
    },
  );
  $("#ontario").hover(
    function () {
      $(this).find(".title2").fadeIn(1000).fadeOut(2000);
    },
  );
  $("#yellowimg").hover(
    function () {
      $(this).find(".title3").fadeIn(1000).fadeOut(2000);
    },
  );
  $("#disney").hover(
    function () {
      $(this).find(".title4").fadeIn(1000).fadeOut(2000);
    },
  );
  $("#good").hover(
    function () {
      $(this).find(".title5").fadeIn(1000).fadeOut(2000);
    },
  );
  $("#button").hover(
    function () {
      $(this).find(".title6").fadeIn(1000).fadeOut(2000);
    },
  );
  $("#burnedlogo").hover(
    function () {
      $(this).find(".title7").fadeIn(1000).fadeOut(2000);
    },
  );
  $("#bailey").hover(
    function () {
      $(this).find(".title8").fadeIn(1000).fadeOut(2000);
    },
  );


  var validation = function () {
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var message = document.getElementById("inputMessage").value;


    $("form").on("submit", function (e) {
        e.preventDefault();
        var name = $("#inputName").val();
        alert(
          "Hello" + " " + name + ",\nWe have received your message. " + "\nThank you for contacting us at Delani Studio."
        );
        document.querySelector("form").reset();
      });

    if (name == " ") {
        alert("Please enter a valid name! \nName must be filled")
        return false;
    };

       if (email == " ") {
        alert("Email must be filled!")
        return false;
    };

    if (message == " ") {
        alert("You have not entered any message, or your message is too short.")
        return false;
    } else {
        alert("Hi " + name + ", your message was successfully sent. Thank you for reaching out to us.")
    }
};
  
  
