import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {


  private apiUrl = 'http://localhost:3000/Table';

  constructor(
    private tableService: TableServiceService,
    private http: HttpClient)
{


  //GetbyId
  //Create Table
  //Update Table
  //Delete Table
  //Get All Tables
  //Get All Tables by Id
  //Get All Tables by Name


  // getById(id: number): Observable<Table> {
  //   return this.http.get<Table>(`${this.apiUrl}/${id}`);
  // }



   }
}
function getById(id: any, number: any) {
  throw new Error('Function not implemented.');
}

