'use strict';

const categories = {
  "food" : {
    "id" : "food",
    "name" : "Food & Drink",
    "quizzes" : [ {
      "answer" : [ 2 ],
      "options" : [ "Ricotta", "Blue Cheese", "Gorgonzola", "Parmesan" ],
      "question" : "Name the Italian, semi-soft, rich cheese with blue veins through it."
    }, {
      "answer" : [ 2 ],
      "options" : [ "Corn", "Garlic", "Potato", "Wheat" ],
      "question" : "What crop does the Colorado Beetle attack?"
    }, {
      "answer" : [ 3 ],
      "options" : [ "Hong Kong", "Taipei", "New York", "San Francisco" ],
      "question" : "In Which city was chop suey invented?"
    }, {
      "answer" : [ 1 ],
      "options" : [ "Foot", "Hand", "Flock", "Pod" ],
      "question" : "What is the correct name for a cluster or bunch of bananas?"
    } ],
    "theme" : "green"
  },
  "history" : {
    "id" : "history",
    "name" : "History",
    "quizzes" : [ {
      "answer" : [ 1 ],
      "options" : [ "George W. Bush", "Jimmy Carter", "Barack Obama", "Lyndon B. Johnson" ],
      "question" : "What U.S. President committed an unpardonable sin by kissing the Queen Mother on the lips?"
    }, {
      "answer" : [ 2 ],
      "options" : [ "Lieutenant", "Sergeant", "General", "Captain" ],
      "question" : "Joan of Arc, in the 15th century, was the first female promoted to this rank in the French army:"
    }, {
      "answer" : [ 1 ],
      "options" : [ "Sardinia", "Corsica", "Tahiti", "Réunion" ],
      "question" : "On which island was Napoleon born?"
    } ],
    "theme" : "blue"
  },
  "knowledge" : {
    "id" : "knowledge",
    "name" : "General Knowledge",
    "quizzes" : [ {
      "answer" : [ 1 ],
      "options" : [ "Trump Tower", "Chrysler building", "Empire State Building", "The New York Times Building" ],
      "question" : "What is the name of the famous art deco skyscraper in New York City?"
    }, {
      "answer" : [ 2 ],
      "options" : [ "Chevy", "Topeka", "Athos", "John Felton" ],
      "question" : "Who is one of “The Three Musketeers”?"
    }, {
      "answer" : [ 2 ],
      "options" : [ "Dog", "Sword", "Fox", "Coyote" ],
      "question" : "Which is the correct translation of Zorro?"
    }, {
      "answer" : [ 2 ],
      "options" : [ "Straw Dogs", "Dirty Harry", "A Clockwork Orange", "Play Misty for me" ],
      "question" : "Which 1971 film, known for its violence, was the first to use Dolby sound?"
    }, {
      "answer" : [ 1 ],
      "options" : [ "Mediterranean sea", "Baltic Sea", "The Bermuda Triangle", "Black Sea" ],
      "question" : "Four of the worst ten maritime disasters all took place in 1945. In which sea were all four ships sunk?"
    }, {
      "answer" : [ 1 ],
      "options" : [ "Walnut", "Almond", "Cashew", "Pistachio" ],
      "question" : "What nut is used to flavor marzipan?"
    } ],
    "theme" : "yellow"
  }
  }

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const currentUserId = firebase.auth().currentUser.uid;

exports.http = (request, response) => {
  return admin.database().ref(`/users/${uid}`).push({ categories }).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    return res.redirect(303, snapshot.ref);
  });
};

exports.event = (event, callback) => {
  callback();
};
