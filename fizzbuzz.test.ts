import { expect } from '@jest/globals';
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () =>
{
  test('should return 1 if received 1', () =>
  { 
    const expected = 1;
    const result = fizzbuzz(1);
    expect(result).toBe(expected);
  })
    test('should return fizz when received number multiplier of 3', () =>
  { 
    const expected = "fizz";
    const result = fizzbuzz(12);
    expect(result).toBe(expected);
    })
    test('should return buzzz when received number multiplier of 5', () =>
  { 
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(result).toBe(expected);
    })
    test('should return fizzbuzz when received number multiplier of 5 and 3', () =>
  { 
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(result).toBe(expected);
    }) 
      test('should return null when received an input different of number', () =>
  { 
    const expected = null;
    const result = fizzbuzz("a");
    expect(result).toBe(expected);
   }) 

})

