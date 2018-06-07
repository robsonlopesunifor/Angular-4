// usa os servicos do servico 
.
.
.
import { ServisosService } from "app/restourants/servisos.service";

.
.
.
export class RestourantsComponent implements OnInit {

	// injecao de dependecia do servico 
  	constructor(private servisosService: ServisosService) { }

  	ngOnInit() {
   	 	this.servisosService.metodo()
  	}
}
