import {Component} from '@angular/core';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";


interface IOption<T> {
  label: string;
  value: T;
}

interface ICustomer {
  id: number;
  name: string;
}

const customer1: ICustomer = { id: 1, name: 'Customer 1' };
const customer2: ICustomer = { id: 2, name: 'Customer 2' };
const options: IOption<ICustomer>[] = [
  { label: customer1.name, value: customer1 },
  { label: customer2.name, value: customer2 },
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgSelectModule, FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  options = options;
  selectedCustomer = customer2;
  selectedCustomerId = customer2.id;
}
