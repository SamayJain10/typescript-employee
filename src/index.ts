class Employee {
    private id: number;
    private name: string;
    private age: number;
  
    constructor(id: number, name: string, age: number) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  
    getID(): number {
      return this.id;
    }
  
    setID(id: number): void {
      this.id = id;
    }
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getAge(): number {
      return this.age;
    }
  
    setAge(age: number): void {
      this.age = age;
    }
  }
  
  class SalariedEmployee extends Employee {
    private salary: number;
    private leaves: number;
    private grossPay: number;
    private netPay: number;
  
    constructor(id: number, name: string, age: number, salary: number, leaves: number) {
      super(id, name, age);
      this.salary = salary;
      this.leaves = leaves;
      this.grossPay = this.calculateGrossPay();
      this.netPay = this.calculateNetPayAfterLeaves();
    }
  
    getSalary(): number {
      return this.salary;
    }
  
    setSalary(salary: number): void {
      this.salary = salary;
    }
  
    getLeaves(): number {
      return this.leaves;
    }
  
    setLeaves(leaves: number): void {
      this.leaves = leaves;
    }
  
    getGrossPay(): number {
      return this.grossPay;
    }
  
    setGrossPay(grossPay: number): void {
      this.grossPay = grossPay;
    }
  
    getNetPay(): number {
      return this.netPay;
    }
  
    setNetPay(netPay: number): void {
      this.netPay = netPay;
    }
  
    calculateGrossPay(): number {
      return this.salary * 12; // 12 months in a year
    }
  
    calculateNetPayAfterLeaves(): number {
      return this.grossPay - (this.leaves * (this.salary / 30)); // Assuming 30 days in a month
    }
  }
  
  class HourlyEmployee extends Employee {
    private dailyHoursInMonth: number;
    private perHourWage: number;
  
    constructor(id: number, name: string, age: number, dailyHoursInMonth: number, perHourWage: number) {
      super(id, name, age);
      this.dailyHoursInMonth = dailyHoursInMonth;
      this.perHourWage = perHourWage;
    }
  
    getDailyHoursInMonth(): number {
      return this.dailyHoursInMonth;
    }
  
    setDailyHoursInMonth(dailyHoursInMonth: number): void {
      this.dailyHoursInMonth = dailyHoursInMonth;
    }
  
    getPerHourWage(): number {
      return this.perHourWage;
    }
  
    setPerHourWage(perHourWage: number): void {
      this.perHourWage = perHourWage;
    }
  
    calculatePay(): number {
      return this.dailyHoursInMonth * this.perHourWage;
    }
  }

// Example usage
const salariedEmployee = new SalariedEmployee(1, 'Samay Jain', 22, 20000, 3);
console.log(`Salaried Employee Net Pay: ${salariedEmployee.getNetPay()}`); 

const hourlyEmployee = new HourlyEmployee(2, 'Samay Jain', 22, 160, 125);
console.log(`Hourly Employee Pay: ${hourlyEmployee.calculatePay()}`); 

  