QUnit.test( "ExamResultSet.prototype.getAverage returns correct result", function( assert ) {
  var set = new ExamResultSet([10, 10, 10, 30]);
  assert.equal(set.getAverage(), 15, "Passed!" );
});
QUnit.test( "ExamResultSet.prototype.getHighest returns correct result", function( assert ) {
  var set = new ExamResultSet([10, 100, 10, 30]);
  assert.equal(set.getHighest(), 100, "Passed!" );
});
QUnit.test( "ExamResultSet.prototype.getLowest returns correct result", function( assert ) {
  var set = new ExamResultSet([50, 10, 100, 10, 30]);
  assert.equal(set.getLowest(), 10, "Passed!" );
});

QUnit.test( "AddableExamResultSet inherits from ExamResultSet", function( assert ) {
  var set = new AddableExamResultSet();
  assert.ok(set.__proto__.__proto__ === ExamResultSet.prototype, "Passed!" );
});

QUnit.test( "AddableExamResultSet.prototype.getLowest works correctly", function( assert ) {
  var set = new AddableExamResultSet();
  set.add(50);
  set.add(15);
  set.add(100);
  assert.equal(set.getLowest(), 15, "Passed!" );
});
QUnit.test( "AddableExamResultSet.prototype.getHighest works correctly", function( assert ) {
  var set = new AddableExamResultSet();
  set.add(50);
  set.add(95);
  set.add(100);
  assert.equal(set.getHighest(), 100, "Passed!" );
});
QUnit.test( "AddableExamResultSet.prototype.getAverage works correctly", function( assert ) {
  var set = new AddableExamResultSet();
  set.add(100);
  set.add(50);
  set.add(150);
  assert.equal(set.getAverage(), 100, "Passed!" );
});