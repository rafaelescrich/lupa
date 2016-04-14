$.ajax({
   crossDomain: true,
   type: 'GET',
   url: 'http://localhost:3000/reds',
   error: function() {
      $('#info').html('<p>An error has occurred</p>');
   },
   dataType: 'json',
   success: function(data) {

      console.log(data.reds[0].General.title);

      var $title = $('<h4>').text(data.reds[0].General.title);
      // var $description = $('<p>').text(data.reds[0].General.description);
      $('#primeiro')
         .replaceWith($title);
      //    .append($description);
   }
});