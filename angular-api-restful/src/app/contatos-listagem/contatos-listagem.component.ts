import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [

    { id: 1, nome: 'Thiago', email: 'thiago.canali@mobilibus.com.br' },
    { id: 2, nome: 'Alexia', email: 'alexia@email.com' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
