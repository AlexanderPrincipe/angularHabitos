import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitosService {

  constructor(private http: HttpClient) { }

  // const url = 'localhost:3000/api/todos'

  getTodo(url: string): Observable<any> {
    return this.http.get(url);
  }
}
