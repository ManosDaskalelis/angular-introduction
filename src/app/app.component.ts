import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Manos";

  person0 = {
    givenName : "manos",
    surName : "daskalelis",
    age: 27,
    email: "manosdaskalelis@aueb.gr",
    address: "Athens, Greece"
  };

  person1 = {
    givenName : "John",
    surName : "Doe",
    age: 27,
    email: "john@example.com",
    address: "New York, USA"
  };
}
