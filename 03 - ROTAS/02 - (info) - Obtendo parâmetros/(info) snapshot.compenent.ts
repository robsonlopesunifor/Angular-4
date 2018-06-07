// 	COMO PEGAR OS DADOS DO PARAMETRO DA URL

//////////////////////////////////////////////////////////////////////////////////
//										//
//	export const ROUTES: Route = [						//
//		{   path: 'restaurant/:id', component: RestaurantComponent }	//
//	]									//
//										//
//////////////////////////////////////////////////////////////////////////////////
//										//
//	<!-- passando um parâmetra -->						//
//	<a [routerLink]="['/restaurant',restaurant.id]">Bakery</a>		//
//										//
//////////////////////////////////////////////////////////////////////////////////


// A PARTIR DE SNAPSHOT  
// fotografia dos parâmetros 
// bom para url estaticas 

import { ActivatedRoute } from '@angular/router'		  // ActivatedRoute  permite pega parâmetros da rota 

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export	  class	   MyComponent    implemensts OnInit {

	myObj:  any

	constructor(private route:ActivatedRoute) { }		   // injeção de dependencia 
	
	ngOnInit() {
		const   id   =   this.route.snapshot.params[‘id’]  // snapshot tira uma foto no
								   // momento atual da url 
								   // params['id'] tem todos os parâmetros 
								   // assim ele pegar o id e para para o subscribe

		this.myObj  =  // … obter os dados baseado no id
	}

}
