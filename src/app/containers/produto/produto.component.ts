import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  onHandlerSubmit(descricao: {descricao: string}):void {
    console.log(descricao);
  }
}
