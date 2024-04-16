import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0 = {
    givenName: "Ioannis",
    surName: "Skretis",
    age: 44,
    email: "ayeegiannos@gmail.com",
    address: 'Athens, Greece'
  };

  person1 = {
    givenName: "George",
    surName: "Skretis",
    age: 74,
    email: "ayeegiannos2@gmail.com",
    address: 'Athens, Greece'
  };
}
