import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  produtos: Array<Produto> = [];

  constructor(
    private produtosService: ProdutoService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.produtosService.get().subscribe((produtos: Array<Produto>) => {
      this.produtos = produtos;
    }, 
    err => {
      throw new Error(err);
    }, () => {
      console.log('Produtos carregados!');
    });
  }

  onhandlerRemoved(id: string): void {
    this.produtosService.remove(id).subscribe(() => {

    }, err => {
      throw new Error(err);
    }, () => {
      this.getProducts();
    })
  }
}
