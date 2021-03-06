'use strict';

// const remote = require('remote');
const {ipcRenderer} = require('electron');
var path = require('path');

var closeEl = document.querySelector('.close');
var settingsEl = document.querySelector('.settings');
var signinEl = document.querySelector('.signin');

signinEl.addEventListener('click', function() {
    //Login pressed
    var user = document.getElementById('plexUsername').value;    
    var pwd = document.getElementById('plexPassword').value;
    ipcRenderer.send('plextv-signin',user,pwd);
});    
ipcRenderer.on('plextv-signin-result',function(event, result){
    //console.log("Renderer recieved " + result);
    var statusEl = document.getElementById('plexStatus');
    console.log(result)
    if (result == true){
        statusEl.innerHTML = "SUCCESS";
    } else {
        statusEl.innerHTML = "FAILURE"
    }
});    
