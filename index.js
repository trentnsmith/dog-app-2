"use strict";


function getDogImage(numInput) {
    if (numInput <= 50 & numInput > 0) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
    
    } else {
        return alert("Please enter a number between 1 and 50");
    }
}

function displayResults(responseJson) {
    console.log(responseJson);
    $(".results").html("");
    responseJson.message.forEach(renderedImg => {
        $(".results").append(`<img src="${renderedImg}" class="results-img">`)
    })
    /*$('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
    )*/
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let userInput = $("#numDogs").val();
        getDogImage(userInput);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});