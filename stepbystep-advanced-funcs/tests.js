QUnit.test( "maps array with function correctly", function( assert ) {
  var a = [2, 3, 4];
  var mapper = x => 2 * x;
  assert.deepEqual(myMap(a, mapper), [4, 6, 8], "Passed!" );
});

QUnit.test( "preloadedMap returns correct function", function( assert ) {
  var mapper = x => x * 10;
  var loadedA = preloadedMap(1, 2, 3)
  assert.deepEqual(loadedA(mapper), [10, 20, 30], "Passed!" );
});