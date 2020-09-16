QUnit.test( "returns prices with taxes", function( assert ) {
  var a = [20, 100, 19.99, 10349.78];
  assert.deepEqual(withTax(a), [20, 120, 19.99, 12419.74], "Passed!" );
});

QUnit.test( "returns total rainfall per region", function( assert ) {
  var a = [[100, 20, 10, 100], [40, 800, 44, 55]];
  assert.deepEqual(totalPerRegion(a), [230, 939], "Passed!" );
});