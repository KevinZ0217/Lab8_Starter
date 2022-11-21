// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//phone number
//test1
test('check 111-111-1111 is phone number', () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});
//test2
test('check (111) 111-1111 is phone number', () => {
    expect(functions.isPhoneNumber("(111) 111-1111")).toBe(true);
});
//test3
test('check (111)1111111 is not phone number', () => {
    expect(functions.isPhoneNumber("(111)1111111")).toBe(false);
});
//test4
test('check (111)111-111 is not phone number', () => {
    expect(functions.isPhoneNumber("(111)111-111")).toBe(false);
});1

//email
//test1
test('check njogleka@ucsd.edu is email', () => {
    expect(functions.isEmail("njogleka@ucsd.edu")).toBe(true);
});
//test2
test('check jiz100@ucsd.io is email', () => {
    expect(functions.isEmail("jiz100@ucsd.io")).toBe(true);
});
//test3
test('check njogleka@ucsd.e is not an email', () => {
    expect(functions.isEmail("njogleka@ucsd.e")).toBe(false);
});
//test4
test('check @ucsd.edu is not an email', () => {
    expect(functions.isEmail("@ucsd.edu")).toBe(false);
});

//password
//test1
test('check neelay is a password', () => {
    expect(functions.isStrongPassword("neelay")).toBe(true);
});
//test2
test('check KEVIN is a password', () => {
    expect(functions.isStrongPassword("KEVIN")).toBe(true);
});
//test3
test('check 666KEVIN is not a password', () => {
    expect(functions.isStrongPassword("666KEVIN")).toBe(false);
});
//test4
test('check KEVINnnnnnnnnnnnnnnnn is not a password', () => {
    expect(functions.isStrongPassword("KEVINnnnnnnnnnnnnnnnn")).toBe(false);
});

//check date
//test1
test('check 11/20/2022 is a date', () => {
    expect(functions.isDate("11/20/2022")).toBe(true);
});
//test2
test('check 1/2/1842 is a date', () => {
    expect(functions.isDate("1/2/1842")).toBe(true);
});
//test3
test('check 01201842 is not a date', () => {
    expect(functions.isDate("01201842")).toBe(false);
});
//test4
test('check 11/20/202a is not a date', () => {
    expect(functions.isDate("11/20/202a")).toBe(false);
});

//check color
//test1
test('check #256 is a hexColor', () => {
    expect(functions.isHexColor("#256")).toBe(true);
});
//test2
test('check #AaAaAa is a hexColor', () => {
    expect(functions.isHexColor("#AaAaAa")).toBe(true);
});
//test3
test('check AAA#AAA is not a hexColor', () => {
    expect(functions.isHexColor("AAA#AAA")).toBe(false);
});
//test4
test('check #ZZZZZZ is not a hexColor', () => {
    expect(functions.isHexColor("#ZZZZZZ")).toBe(false);
});
