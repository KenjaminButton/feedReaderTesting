var Calculator = function() {
	return {
		add: function(a, b) {
			return a + b;
		},
		subtract: function(a, b) {
			return a - b;
		},
		multiply: function(a, b) {
			return a * b;
		},
		divide: function(a, b) {
			return a / b;
		}
	}
}
describe('calculatorSuite', function() {
	var calculator = new Calculator();
	it('should add two numbers together', function() {
		expect(calculator.add(5, 5)).toBe(10);
	});
	it('should subtract two numbers', function() {
		expect(calculator.subtract(90, 8)).toBe(82);
	});
	it('should multiply two numbers to get the product', function() {
		expect(calculator.multiply(8, 8)).toBe(64);
	});
	it('should divide two numbers to get the quotient', function() {
		expect(calculator.divide(81, 9)).toBe(9);
	});
});