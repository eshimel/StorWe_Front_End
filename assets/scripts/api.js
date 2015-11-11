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
  debugger;
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



