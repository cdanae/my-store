import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent {
  name = 'Danae';
  age = 29;
  image = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Brisa',
    age: 31,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleBtn() {
    this.btnDisabled = !this.btnDisabled;
  }
  agePlusBtn() {
    this.person.age += 1;
  }
}
