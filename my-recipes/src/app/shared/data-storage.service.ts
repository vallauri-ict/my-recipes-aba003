import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private REST_API_SERVER = "http://localhost:1337/"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + endpoint)
  }

  public sendPostRequest(endpoint: string, ingredient : IngredientModel) {
    return this.httpClient.get(this.REST_API_SERVER + endpoint)
  }

  public sendPatchRequest(endpoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + endpoint)
  }
  public sendDeleteRequest(endpoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + endpoint)
  }
}
