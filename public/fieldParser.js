/**
 * Created by Omar on 10/24/2016.
 */

$(document).ready(function(){
    $('.btn-update-prof').click(function(event){ // Handle event when there is a a click on the class
        var email = $('.form-email').val(); // Set email to the value that's in the text field
        var name =  $('.form-name').val(); // Set name to the value that's in the text field
        var pass =  $('.form-pass').val(); // Set pass to the value that's in the text field
        var data = { email : email, name : name, pass: pass }; // Convert to JSON string
        $.post('/profile', data); // Post to profile
        event.preventDefault();
    });

    $('.btn-signup').click(function(event){ // Set initial name
        var name =  $.trim($('.form-name').val());
        $.post('/signup', name);
    });

});