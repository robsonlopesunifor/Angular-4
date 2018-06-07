// CHAMA SO OS DADOS DE UM RESTALRANTE restourantsById( Id )

import { Injectable } from '@angular/core'
import { Http } from "@angular/http";

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch' 	// tratamento de erro
//
import { Restourant } from "app/restourants/restourant/restourants.model";

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'	// tratamento de erro

@Injectable()
export class RestourantsService {

  constructor(private http: Http){}

  restourants():Observable<Restourant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
  }
///////////////////////CODIGO NOVO///////////////////////////

  restourantsById(id: string): Observable<Restourant>{     // vai retornar um Model Restaurant 
    return this.http.get(`${MEAT_API}/restaurants/${id}`)  // Sem a barra você chama todos.
      							   // Mas com a barra, mais o id 
      							   // você chama só um
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
  }

/////////////////////////////////////////////////////////////
}


