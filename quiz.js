const employees = [
    { name: "Nijhum Jawad", hourlyRate: 48.56, hoursWorked: 65 },
    { name: "Zakia Jeme", hourlyRate: 49.69, hoursWorked: 42 },
    { name: "Rasif Ashrafi", hourlyRate: 48.86, hoursWorked: 70 },
]

class Payroll {
    constructor(employees) {
        this.employees = employees;
        this.name = this.getNames();
        this.hoursWorked = this.getFullTime();
        this.totalCost = this.getTotalLabour();
    }
    getNames() {
      const employeeName = this.employees.map(employee => {
            return employee.name;
        })
        return employeeName.sort();
    }
    getFullTime() {
        return this.employees.filter(employee => (employee.hoursWorked > 60))
    }
    getTotalLabour() {
        return this.employees.reduce((acc, curr) => {
                return (acc + curr.hoursWorked * curr.hourlyRate);
        }, 0)
    }
}

const employee = new Payroll(employees);
console.log(employee.name);
console.log(employee.hoursWorked);
console.log(employee.totalCost);
