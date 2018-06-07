import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable"

export class ErrorHandler {
  static handleError(error: Response | any){		// retorna um objeto do tipo reponse
							// nele tras o estatos erro e a url 
    let errorMessage: string
    if(error instanceof Response){			// se meu erro for do tipo response 
      	errorMessage = `Erro ${error.status} ao acessor a URL ${error.url} - ${error.statusText}`
    }else{						// se for um tipo desconhecido so mostra o erro 
      	errorMessage = error.toString()
    }

    console.log(errorMessage)
    return Observable.throw(errorMessage)             	// assim que alguem tentar ler a 
         						// mensagem do observable ele vai
         						// ler essa mensagem 
  }
}

