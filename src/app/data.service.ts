import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getGroceries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/todos`);
  }

  addGrocery(title: string): Observable<any> {
    const newGrocery = { title, completed: false };
    return this.http.post<any>(`${this.apiURL}/todos`, newGrocery);
  }

  updateGrocery(id: number, title: string, completed: boolean): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/todos/${id}`, { title, completed });
  }

  deleteGrocery(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/todos/${id}`);
  }
}
