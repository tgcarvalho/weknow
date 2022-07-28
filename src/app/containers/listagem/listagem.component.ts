import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto.model';
import { MessageService } from 'src/app/services/message/message.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  produtos: Array<Produto> = [];

  constructor(
    private produtosService: ProdutoService,
    private messageService: MessageService
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
    this.produtosService.remove(id).subscribe((resp) => {
      this.messageService.open(`Produto removido com sucesso.`);
    }, err => {
      throw new Error(err);
    }, () => {
      this.getProducts();
    })
  }
}
