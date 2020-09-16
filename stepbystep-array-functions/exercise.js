/*
Task 1

In the fictional country of Geekston there is a sales 
tax of 20%, but it is only applied to items which are 
priced at least $100. Write a function withTax which 
will take an array of numbers which are prices, and 
return an array with all the prices in, in the same 
order, with the tax applied based on the Geetkston 
rules above. Prices in the returned array should be 
rounded to 2 decimal places, and should be numbers 
but not strings.

Hint: numbers can be rounded using the toFixed function. 
So (99.989).toFixed(2) will return “99.99”. You’ll need 
to wrap the number in parenthesis as shown to be able 
to call to fixed on them. Note this returns a string and 
the answer requires numbers… More information on 
toFixed: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

Example useage:

var prices = [
	20,
	109.5,
	3.99,
	299.99,
];

var pricesWithTax = withTax(prices)

//pricesWithTax: [24, 131.4, 4.79, 359.99]
*/

function withTax(beforeTaxPrices) {
	return beforeTaxPrices.map(function(price) {
		if (price < 100.00) {
			return price;
		} else {
			return Number((price * 1.2).toFixed(2));
		}
	});
}

var prices = [
	20,
	109.5,
	3.99,
	299.99,
];

console.log(withTax(prices));


/*
Task 2

The rainfall per quarter (3 month period) in mm of a 
given region is stored as an array of numbers, one per 
quarter. For example: [999, 20, 109, 160]. There is 
then an array of multiple regions’ rainfal per quarter. 
This is an array where each element is the rainfall per 
quarter of a region. Example:

[
	[999, 20, 109, 160], // Rainfall for London
	[100, 34, 100, 90], // Rainfall for Paris
	[10, 90, 38, 22], // Rainfall for Berlin
]
Write a function, totalPerRegion which will take an 
array of rainfalls per region as shown above, and 
return an array where each element is the total 
rainfall per region (e.g. each quarters rainfall added 
up).

Example:

var perRegionPerQuater = [
	[999, 20, 109, 160], // Rainfall for London
	[100, 34, 100, 90], // Rainfall for Paris
	[10, 90, 38, 22], // Rainfall for Berlin
];

var perRegionAnually = totalPerRegion(perRegionPerQuater);

perRegionAnually: [
	1288, // London
	324, // Paris
	160, // Berlin
]
*/

var perRegionPerQuarter = [
	[999, 20, 109, 160], // Rainfall for London
	[100, 34, 100, 90], // Rainfall for Paris
	[10, 90, 38, 22], // Rainfall for Berlin
];

function total(numsArray) {
	return numsArray.reduce(function(runningTotal, currValue) {
		return runningTotal += currValue;
	}, 0);
}

function totalPerRegion(array1) {
	return array1.map(total);
}

let perRegionAnually = totalPerRegion(perRegionPerQuarter);
console.log(perRegionAnually);