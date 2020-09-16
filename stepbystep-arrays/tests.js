QUnit.test( "remove removes correct element", function( assert ) {
  var a = [1,2,3,4];
  remove(a, 1);
  assert.deepEqual(a, [1, 3, 4], "Passed!" );
});

QUnit.test( "reversed returns correct string", function( assert ) {
  var a = ['foo', 'bar', 'bash'];
  assert.equal(reversed(a), 'bash,bar,foo', "Passed!" );
});

QUnit.test( "reversed returns correct string when first string has a comma at the end", function( assert ) {
  var a = ['foo,', 'bar', 'bash'];
  assert.equal(reversed(a), 'bash,bar,foo,', "Passed!" );
});

QUnit.test( "calculatePercentages returns array with correct percentages", function( assert ) {
  var a = [10, 20, 50];
  assert.deepEqual(calculatePercentages(a, 50), [20, 40, 100], "Passed!" );
});