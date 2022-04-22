
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 3})).toEqual('179.69');
  expect(calculateMonthlyPayment({amount: 20000, years: 3, rate: 2})).toEqual('572.85');
  expect(calculateMonthlyPayment({amount: 0, years: 0, rate: 0})).toEqual(false);
});


it("should return a result with 2 decimal places", function() {
  expect(parseFloat(calculateMonthlyPayment({amount: 10000, years: 5, rate: 3}))).toMatch(/\d+[.]\d\d/gm); 
  expect(parseFloat(calculateMonthlyPayment({amount: 50, years: 3, rate: 2}))).toMatch(/\d+[.]\d\d/gm);
  expect(parseFloat(calculateMonthlyPayment({amount: 20, years: 5, rate: 2}))).toMatch(/\d+[.]\d\d/gm);
});

