// 	COMO PEGAR OS DADOS DO PARAMETRO DA URL

//////////////////////////////////////////////////////////////////////////////////
//										//
//	export const ROUTES: Route = [						//
//		{   path: 'restaurant/:id', component: RestaurantComponent }	//
//	]									//
//										//
//////////////////////////////////////////////////////////////////////////////////
//										//
//	<!-- passando um par�metra -->						//
//	<a [routerLink]="['/restaurant',restaurant.id]">Bakery</a>		//
//										//
//////////////////////////////////////////////////////////////////////////////////


// A PARTIR DE SNAPSHOT  
// fotografia dos par�metros 
// bom para url estaticas 

import { ActivatedRoute } from '@angular/router'		  // ActivatedRoute  permite pega par�metros da rota 

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export	  class	   MyComponent    implemensts OnInit {

	myObj:  any

	constructor(private route:ActivatedRoute) { }		   // inje��o de dependencia 
	
	ngOnInit() {
		const   id   =   this.route.snapshot.params[�id�]  // snapshot tira uma foto no
								   // momento atual da url 
								   // params['id'] tem todos os par�metros 
								   // assim ele pegar o id e para para o subscribe

		this.myObj  =  // � obter os dados baseado no id
	}

}
