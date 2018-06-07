// Se o servico manipula alguma classe ou dado, ele precisa ser importado 
import { NomeDaClasse } from "app/../../nomeDaClasse.model";

export class RestourantsService {
  	constructor(){}

  	// e um exemplo
  	// no caso, uma estrutura de dados do tipo NomeDaClasse 
 	estruturaDeDados: NomeDaClasse [] = [
  	{
    		dado1: "valor 1",
    		dado2: "valor 2",
    		dado3: "valor 3"
  	}]

  	// metodo so servico
  	// retorna o estruturaDeDados 
  	medodo():NomeDaClasse [] {
    		return this.estruturaDeDados
  	}
}


