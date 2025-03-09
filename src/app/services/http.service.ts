import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, shareReplay, take } from 'rxjs';


interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getUserCount(): Observable<number> {
    return interval(1000);
  }

  getTodo(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>('/todos').pipe(shareReplay(1));
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('/users').pipe(shareReplay(1));
  }


}
