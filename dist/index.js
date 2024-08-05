"use strict";
class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getID() {
        return this.id;
    }
    setID(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
class SalariedEmployee extends Employee {
    constructor(id, name, age, salary, leaves) {
        super(id, name, age);
        this.salary = salary;
        this.leaves = leaves;
        this.grossPay = this.calculateGrossPay();
        this.netPay = this.calculateNetPayAfterLeaves();
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getLeaves() {
        return this.leaves;
    }
    setLeaves(leaves) {
        this.leaves = leaves;
    }
    getGrossPay() {
        return this.grossPay;
    }
    setGrossPay(grossPay) {
        this.grossPay = grossPay;
    }
    getNetPay() {
        return this.netPay;
    }
    setNetPay(netPay) {
        this.netPay = netPay;
    }
    calculateGrossPay() {
        return this.salary * 12; // 12 months in a year
    }
    calculateNetPayAfterLeaves() {
        return this.grossPay - (this.leaves * (this.salary / 30)); // Assuming 30 days in a month
    }
}
class HourlyEmployee extends Employee {
    constructor(id, name, age, dailyHoursInMonth, perHourWage) {
        super(id, name, age);
        this.dailyHoursInMonth = dailyHoursInMonth;
        this.perHourWage = perHourWage;
    }
    getDailyHoursInMonth() {
        return this.dailyHoursInMonth;
    }
    setDailyHoursInMonth(dailyHoursInMonth) {
        this.dailyHoursInMonth = dailyHoursInMonth;
    }
    getPerHourWage() {
        return this.perHourWage;
    }
    setPerHourWage(perHourWage) {
        this.perHourWage = perHourWage;
    }
    calculatePay() {
        return this.dailyHoursInMonth * this.perHourWage;
    }
}
// Example usage
const salariedEmployee = new SalariedEmployee(1, 'Samay Jain', 22, 20000, 3);
console.log(`Salaried Employee Net Pay: ${salariedEmployee.getNetPay()}`);
const hourlyEmployee = new HourlyEmployee(2, 'Samay Jain', 22, 160, 125);
console.log(`Hourly Employee Pay: ${hourlyEmployee.calculatePay()}`);
