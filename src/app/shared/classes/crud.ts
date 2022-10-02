import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ApiPaginatedResponse } from '../interfaces/api-paginated-response';
import { ApiResponse } from '../interfaces/api-response';

export abstract class Crud<T> {
  protected httpOptions: any;

  protected constructor(protected httpClient: HttpClient, protected API_URL: string) {
    this.httpOptions = {
      params: new HttpParams(),
    }
  }

  public index(params: any = {}): Observable<any> {
    this.setParams(params);

    return this.httpClient
      .get<ApiPaginatedResponse<T>|ApiResponse<T>>(this.API_URL, this.httpOptions)
      .pipe(take(1));
  }

  public store(record: any): Observable<any> {
    this.setParams({});
    return this.httpClient.post(this.API_URL, record, this.httpOptions).pipe(take(1));
  }

  public show(id: string, params: any = {}): Observable<any> {
    this.setParams(params);
    return this.httpClient.get<T>(`${this.API_URL}/${id}`, this.httpOptions).pipe(take(1));
  }

  public update(record: any): Observable<any> {
    this.setParams({});

    return this.httpClient.put<T>(`${this.API_URL}/${record.id}`, record, this.httpOptions).pipe(take(1));
  }

  public destroy(id: string): Observable<any> {
    this.setParams({});
    return this.httpClient.delete(`${this.API_URL}/${id}`, this.httpOptions).pipe(take(1));
  }

  protected setParams(params: any): void {
    this.httpOptions.params = new HttpParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        this.httpOptions.params = this.httpOptions.params.set(key, value as string);
      }
    })
  }
}
