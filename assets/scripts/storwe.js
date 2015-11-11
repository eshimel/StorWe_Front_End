'use strict'

var storweAPI = storweAPI || {};

$("document").ready(function(){

//if storwe API isn't undefined it will remain its original value
//

var form2object = function(form) {
  var data = {};
  $(form).find('input').each(function(index, element) {
  var type = $(this).attr('type');
  if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
  data[$(this).attr('name')] = $(this).val();
  }
  });
  return data;
  };

var wrap = function wrap(root, formData) {
  var wrapper = {};
  wrapper[root] = formData;
  return wrapper;
  };

var callback = function callback(error, data) {
  if (error) {
    console.error(error);
    $('#result').val('status: ' + error.status + ', error: ' +error.error);
    return;
    }

    // $('#result').val(JSON.stringify(data, null, 4));
    console.log(JSON.stringify(data, null, 4));
    };
//lets me know if registration works
$("#register").submit(function(e) {

    var credentials = wrap('credentials', form2object(this));
    storweAPI.register(credentials, function(err, data){

    });
    e.preventDefault();
    // alert( "Handler for .submit() called." );

    });


$("#login").on ('submit',function(e) {
    var credentials = wrap('credentials', form2object(this));
    var cd = function cd(error, data) {
      if (error){
        callback(error);
      }
      return;
    };
    callback(null, data);
    $(',token').val(data.user.token);
    $('.id').validate.user.id;
    console.log(data.user.token);
    });

/*$("#login").on ('submit',function() {
    var url = $(this).attr('href');
    $("#center").load("login.html + #center");
});

$("#contributions").submit(function(){
    var url = $(this).attr('href');
    $("right").load("contribution.html + #center + #right");*/
});


/*Stories
 The most recent completed story is available to read on the login/registration page
 Stories are complete when Outline changes
 The story in progress is visible only after a contribution is submitted

Outines
Outlines are provided from the database upon login
Outlines change every ten Contributions

Clues
Users receive clues from the previous user upon login, unless you are the first user
After they submit their contribution, users submit clues for the next user

Contributions
Users make a contribution and submit it upon login
A contribution is appended to the story in progress after submission
Stories are made up of ten contributions
*/




