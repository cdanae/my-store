import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent {
  widthImg = 10;
  name = 'Danae';
  age = 29;
  image = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Brisa',
    age: 31,
    avatar: 'https://source.unsplash.com/random'
  }

  emojis: string[] = ['🥞', '🧆', '🥮']
  newEmoji = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  products: Product[] = [
    {
      name: 'Bee Cake',
      price: 525,
      img: '../assets/images/bee-cake.jpg',
    },
    {
      name: 'Brownie',
      price: 515,
      img: '../assets/images/brownie.jpg'
    },
    {
      name: 'Nude Cake',
      price: 520,
      img: '../assets/images/nudecake.jpg'
    },
    {
      name: 'Party Nude Cake',
      price: 550,
      img: '../assets/images/party-nudecake.jpg'
    },
    {
      name: 'Wedding Cake',
      price: 1000,
      img: '../assets/images/wedding-cake.jpg'
    },
  ]

  toggleBtn() {
    this.btnDisabled = !this.btnDisabled;
  }
  agePlusBtn() {
    this.person.age += 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;    
  }
  addEmojiBtn() {
    this.emojis.push(this.newEmoji);
    this.newEmoji = ''
  }
  deleteEmojiBtn(index: number) {
    this.emojis.splice(index, 1)
  }
}
