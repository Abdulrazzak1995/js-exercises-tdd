// example
var getsecondthird =require("./get-second-third");
test("Get second third smallest" , function(){

//Arrange

var myArray = [90,5,11,8,6];
var unchanged = [90,5,11,8,6];
var expected = [6,8];

//Act
var result = getsecondthird(myArray);

//Assert

expect(result).toEqual(expected);
expect(myArray).toEqual(unchanged);

});
// input = [90, 5, 11, 8, 6];



// expected output = [6, 8];

// also test that the original array has not changed
