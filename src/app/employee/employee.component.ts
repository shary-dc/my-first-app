import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
    employees: Employee[] = [
        { id: 1, name: 'John Heisenberg', isActive: true },
        { id: 2, name: 'Ferris Bueller', isActive: false },
    ]

    getEmployees(): Employee[] {
        return this.employees;
    }
}