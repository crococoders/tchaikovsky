const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let today;
let actualAnswer;

const isItFriday = (today) => {
  if (today.toLowerCase() === 'friday') {
    return 'Yes';
  } else {
    return 'Nope';
  }
};

Given('today is Sunday', function () {
  today = 'Sunday';
});

When("I ask whether it's Friday yet", function () {
  actualAnswer = isItFriday(today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(actualAnswer, expectedAnswer);
});
