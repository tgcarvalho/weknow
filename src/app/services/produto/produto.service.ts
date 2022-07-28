import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url = 'http://18.231.42.102:3000/api';
  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Array<Produto>> {
		return this.http.get<Array<Produto>>(`${this.url}/produtos`);
	}

  public getByID(id: string): Observable<Produto> {
		return this.http.get<Produto>(`${this.url}/produtos/${id}`);
	}

  public create(descricao: string): Observable<Produto> {
		return this.http.post<Produto>(`${this.url}/produtos/`, {
      descricao
    });
	}

  public update(id: string, descricao: string): Observable<Produto> {
		return this.http.put<Produto>(`${this.url}/produtos/${id}`, {
      descricao
    });
	}

  public remove(id: string): Observable<Produto> {
		return this.http.delete<Produto>(`${this.url}/produtos/${id}`);
	}

}
