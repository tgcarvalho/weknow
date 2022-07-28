import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  produtos: Array<Produto> = [];
  displayedColumns: string[] = ['id', 'descricao', 'acao'];

  @Input() set dataSource(value: Array<Produto>) {
    const hasProduto = value
    if(hasProduto) {
      this.produtos = value;
    }
  }

  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  onhandlerRemoved(id: string): void {
    this.remove.emit(id);
  }
}
