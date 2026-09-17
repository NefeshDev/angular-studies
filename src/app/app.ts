import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent , CardInterface } from './card-component/card-component';
import { CardInfoComponent } from './card-info-component/card-info-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardInfoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-novo');

}

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
