// SEM MUDANÇA: RETORNA JSON COM TODOS OS RESTALRANTES 

import { Component, OnInit } from '@angular/core';
import { Restourant } from "app/restourants/restourant/restourants.model";	// Model
import { RestourantsService } from "app/restourants/restaurants.service";	// Servico

@Component({
  selector: 'mt-restourants',
  templateUrl: './restourants.component.html'
})
export class RestourantsComponent implements OnInit {

  restourants: Restourant[]	// Array de model Restourant 
				// para quardar os restalrantes 

  constructor(private RestourantsService: RestourantsService) { }  // injeta o serviso 
								   // do arquivo restaurants.service

  ngOnInit() {
    //this.restourants = this.RestourantsService.restourants()
    this.RestourantsService.restourants()	// acessa o metodo restourants do servico 
      .subscribe(restaurants => this.restourants = restaurants)	// se escreve no serviso 
								// e fica esperando resposta
  }

}


