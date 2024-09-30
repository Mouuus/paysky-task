import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { product } from 'src/app/pages/dashboard/models/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsBaseUrl = `${environment.apiURL}/products`;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<product[]> {
    return this.http
      .get<product[]>(`${this.productsBaseUrl + '?sort=desc'}`)
      .pipe(map((response: product[]) => response));
  }

  deleteProduct(product_id: any): Observable<any> {
    return this.http
      .delete<void>(this.productsBaseUrl + `/${product_id}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(map((response: any) => response));
  }

  addProduct(product: product): Observable<product> {
    return this.http
      .post<Observable<product>>(this.productsBaseUrl, product)
      .pipe(map((response: any) => response));
  }

  updateProduct(product: product): Observable<product> {
    return this.http
      .put<Observable<product>>(
        this.productsBaseUrl + `/${product.id}`,
        product
      )
      .pipe(map((response: any) => response));
  }
}
