import { binding, given, then, when } from 'cucumber-tsflow';
const assert = require('assert');

@binding()
export class ExampleSteps {
  private today!: string;
  private actualAnswer!: string;

  public isItFriday(today: string) {
    if (today.toLowerCase() === 'friday') {
      return 'Yes';
    } else {
      return 'Nope';
    }
  }

  @given(/today is Sunday/)
  public givenTodayIsSunday() {
    this.today = 'Sunday';
  }

  @when(/I ask whether it's Friday yet/)
  public whenAskIsItFriday() {
    this.actualAnswer = this.isItFriday(this.today);
  }

  @then(/I should be told "([^"]*)"/)
  public thenShoulBeTold(expectedAnswer: string) {
    assert.equal(this.actualAnswer, expectedAnswer);
  }
}
