import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  addPet(pet: any, onScuccess:any, onError:any){

    const url = `${this.BASE_URL}/pet`;

    pet.id = this.generateRandomId(); // Generate a random ID for the new pet

    this.http.post(url, pet).subscribe((res:any)=>{
      if(res.id){
        onScuccess('Added pet');
      }else{
        onError('Failed to add pet');
      }
    })
  }

  deletePet(pet: any, onSuccess: any, onError: any) {
    const url = `${this.BASE_URL}/pet/${pet.id}`;

    this.http.delete(url, { responseType: 'text' }).subscribe(
      (res) => {
        onSuccess(res);
      },
      (err) => {
        onError(err);
      }
    );
  }


  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
