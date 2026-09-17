import { Component, Input } from '@angular/core';

export interface CardInterface{
  nome: string;
  idade: number;
  ativo: boolean
}

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  @Input({required: true}) cardData!: CardInterface;

}
