import { Component } from '@angular/core';
import { CardComponent, CardInterface } from '../card-component/card-component';

@Component({
  selector: 'app-card-info-component',
  imports: [CardComponent],
  templateUrl: './card-info-component.html',
  styleUrl: './card-info-component.css',
})
export class CardInfoComponent {
  //meuTextoCard: CardInterface = {nome: 'Joaozinho Romeu', idade: 23, ativo: false}

   listaUsuarios: CardInterface[] = [
    { nome: 'Joaozinho Romeu', idade: 23, ativo: true },
    { nome: 'Maria Julieta', idade: 20, ativo: false },
    { nome: 'Carlos Silva', idade: 30, ativo: true },
    { nome: 'Ana Souza', idade: 25, ativo: false }
  ];
}
