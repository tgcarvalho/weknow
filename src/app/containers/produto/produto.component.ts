import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto.model';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  descricao: string = '';

  constructor(
    private produtoService: ProdutoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    if(this.id){
      this.produtoService.getByID(this.id).subscribe(({descricao}: Produto) => {
        this.descricao = descricao;
      })
    } 
  }

  get id(): string | null {
		return this.route.snapshot.paramMap.get('id') as unknown as
			| string
			| null;
	}

  onHandlerSubmit({descricao}: {descricao: string}):void {
    if(this.id){
      this.produtoService.update(this.id, descricao).subscribe((resp)=>{
        console.log(resp)
      }, err => {
        throw new Error(err);
      }, () => this.onBackList());
    } else {
      this.produtoService.create(descricao).subscribe(resp => {
        console.log(resp)
      }, err => {
        throw new Error(err);
      }, () => this.onBackList());
    }
  }

  onBackList(): void {
    this.router.navigate(['/', 'produtos'])
  }
}
