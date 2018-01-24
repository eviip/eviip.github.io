$(function() {

  // $('.collapse').collapse('hide');
  $('.list-group-item.active').parent().parent('.collapse').collapse('show');
  // Markdown plain out to bootstrap style
  $('#markdown-content-container table').addClass('table');
  $('#markdown-content-container img').addClass('img-responsive');


  $('#beta-form').on('submit', function(e) {
    e.preventDefault();
    $('#beta-form input[type=submit]').attr('disabled', 'disabled');
    $('#spinner').toggle();
    var formData = $('#beta-form').serialize();
    
    $.ajax({
      type: 'POST',
      url: e.target.action,
      data: formData,
      success: function(data){
        
        $('#beta-form input').val("");
        $('#beta-form input[type=submit]').prop('disabled', false);
        $('.response-success').toggle();
        $('#spinner').toggle();
      },
      error: function(xhr, type){
        $('#beta-form input[type=submit]').prop('disabled', false);
        $('.response-error').toggle();
        $('#spinner').toggle();
        console.error(err);
      }
    });
  });
});
