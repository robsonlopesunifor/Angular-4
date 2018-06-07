
// CARREGA OS DADOS DE UM RESTALRANTE 
// SE ESCREVENDO EM UM SERVICO 
// PASSANDO UM DADO PEGO NA URL
// E SALVAR NO RESTALRANT 

import { Component, OnInit } from '@angular/core';
///////////////////////////////CODIGO NOVO///////////////////////////////////
// RestourantsService: servico que retorna um restaurante 
// Restourant: estrutura de dados Model
// ActivatedRoute: permite pega parâmetros da rota 

import { ActivatedRoute } from '@angular/router'
import { RestourantsService } from '../restourants/restaurants.service';  
import { Restourant } from '../restourants/restourant/restourant.model'
/////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

////////////////////////////////CODIGO NOVO////////////////////////////////////
  restourant: Restourant					// Model onde será guardado os dados 

  constructor(private restourantsService: RestourantsService,	
              private route: ActivatedRoute) { }		// injeção de dependência
								// RestourantsService
								// ActivatedRoute

  ngOnInit() {
    this.restourantsService.restourantsById(this.route.snapshot.params['id'])
							// snapshot tira uma foto, no momento atual da url 
							// params['id'] tem todos os parâmetros 
							// assim ele pegar o id, e passa para o subscribe
      .subscribe(restourant => this.restourant = restourant)  // depois adiciona ao Model restourant
  }
//////////////////////////////////////////////////////////////////////////////////

}


