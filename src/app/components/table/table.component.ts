import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  produtos: Array<Produto> = [];
  displayedColumns: string[] = ['id', 'descricao', 'quantidade', 'acao'];

  @Input() set dataSource(value: Array<Produto>) {
    const hasProduto = value
    if(hasProduto) {
      this.produtos = value;
    }
  }

  constructor() { }

  ngOnInit(): void {}
}
