import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = 'https://petstore3.swagger.io/api/v3';

  constructor(private http: HttpClient) {

  }

  getPets(status: string = 'available'): Observable<any[]> {

    const url = `${this.BASE_URL}/pet/findByStatus?status=${status}`;

    return this.http.get<any[]>(url);
  }

  addPet(pet: any): Observable<any> {

    const url = `${this.BASE_URL}/pet`;

    pet.id = this.generateRandomId(); // Generate a random ID for the new pet

    return this.http.post(url, pet).pipe(
      map((response: any) => response.data)
    );
  }

  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
