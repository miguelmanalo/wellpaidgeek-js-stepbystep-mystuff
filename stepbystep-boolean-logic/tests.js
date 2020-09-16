QUnit.test( "isEven returns true for 0, function( assert )", function (assert) {
  assert.ok(isEven(0) === true, "Passed!" );
});

QUnit.test( "isEven returns false for odd numbers", function( assert ) {
  assert.ok(isEven(1) === false, "Works for 1!");
  assert.ok(isEven(9) === false, "Works for 9!");
  assert.ok(isEven(957) === false, "Works for a mystery odd number!")
});

QUnit.test( "isEven returns true for even numbers", function( assert ) {
  assert.ok(isEven(2) === true, "Works for 2!");
  assert.ok(isEven(10) === true, "Works for 10!");
  assert.ok(isEven(800) === true, "Works for a mystery even number!")
});

QUnit.test( "getExamResult returns 'Cheat' for more than 100", function( assert ) {
  assert.ok(getExamResult(101) === 'Cheat', "Works for Cheaters!");
});

QUnit.test( "getExamResult returns 'Pass' for more than or equal to 50", function( assert ) {
  assert.ok(getExamResult(50) === 'Pass', "Works for just passed!");
  assert.ok(getExamResult(89) === 'Pass', "Works for passed!");
});

QUnit.test( "getExamResult returns 'Epic fail' for 0", function( assert ) {
  assert.ok(getExamResult(0) === 'Epic fail', "Works for Epic fail!");
});

QUnit.test( "getExamResult returns 'Fail' for less than 50", function( assert ) {
  assert.ok(getExamResult(49) === 'Fail', "Works for just failed!");
  assert.ok(getExamResult(9) === 'Fail', "Works for failed!");
});

