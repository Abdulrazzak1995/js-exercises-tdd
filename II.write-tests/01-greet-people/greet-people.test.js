var greeatPeople = require("./great-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  var myArray = ['Irina' , 'Ashleigh', 'Etza'];
  var unchanged = ['Irina' , 'Ashleigh', 'Etza'];
  var expected = 'Hello Irina Ashleigh Etza' ;
  
  // Act //question
  var result = greatPeople(myArray);
  // Assert//question
  expect(result).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});
