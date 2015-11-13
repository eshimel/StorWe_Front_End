  'use strict'
//if storwe API isn't undefined it will remain its original value
var storweAPI = storweAPI || {};

//    storweAPI.login = function
// storweAPI is the object!
storweAPI.server = 'http://localhost:3000';

// This ajax functionality wraps around ajax calls for register, list, etc
storweAPI.ajax = function(config, cb) {
  $.ajax(config).done(function(data, textStatus, jqxhr) {
    cb(null, data);
    }).fail(function(jqxhr, status, error) {
    cb({jqxher: jqxhr, status: status, error: error});
  });
 };

storweAPI.register = function register(credentials, callback) {

  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/register',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(credentials),
    dataType: 'json'
  }, callback);
};

storweAPI.login = function login(credentials, callback) {
  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/login',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(credentials),
    dataType: 'json'
  }, callback);
};

storweAPI.contributions = function contributions(token, callback) {
  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/contributions',
   contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({}),
      dataType: 'json',
    }, callback);


};

storweAPI.clues = function clues(token, callback) {
   this.ajax({
     method: 'GET',
     url: storweAPI.server + '/clues',
     headers: {
       Authorization: 'Token token=' + token,
     },
     dataType: 'json'
    }, callback);
 };

  //Authenticated api actions


  /*createContribution: function (token, callback) {
    this.ajax({
      method: 'POST',
      url: this.serve + '/',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({}),
      dataType: 'json',
    }, callback);
  },

  showGame: function (id, token, callback) {
    this.ajax({
      method: 'GET',
      url: this.ttt + '/games/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  },

storweAPI.contribution(token, function(error, topicData){
         if(error){}
         // else means that the login worked
         else {
           console.log(JSON.stringify(topicData, null, 4));
           topicData.topics.forEach(function(topic) {
             // <li>topic.title</li>
             $(".post-content").append("#right" + topic.title + "</li>");
           }); //end of forEach loop for Topic Data
         } //end of if error check
       }); // *** end list topic ***


storweAPI.previous_story = function previous_story( id, callback) {
  this.ajax({
    method: 'GET',
    // url: 'http://httpbin.org/post',
    url: this.server + '/story.all/' + id,
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify({}),
    dataType: 'json'
  }, callback);
};

storweAPI.inprogress = function inprogress(id, callback) {
  this.ajax({
    method: 'POST',
    // url: 'http://httpbin.org/post',
    url: this.server + '/stories',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(credentials),
    dataType: 'json'
  }, callback);
};
*/


