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

// SUBSCRIBE 
// bom para url dinamicas

import { ActivatedRoute } from '@angular/router'	 // ActivatedRoute  permite pega par�metros da rota 

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export	 class	 MyComponent   implemensts OnInit {

	myObj:  any

	constructor(private route:ActivatedRoute) {  }			   // injecao de dependencia  
	
	ngOnInit() {
		this.route.params.subscribe(params => {			   // vai ficar ouvindo 
			const   id   =   params[�id�]			   // pega os dados do parametro id
			this.myObj  =  // � obter os dados baseado no id    
		})
	}
}

