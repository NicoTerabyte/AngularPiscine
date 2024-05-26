//NOTA mettere nel config come module es6

import { Persona  } from './Persona.js'
import{addizione, sottrazione, moltiplicazione} from './importFiles.js'
//qui importiamo le funzioni dal file 'importFiles.ts
console.log(addizione(5, 5))
console.log(sottrazione(5, 5))
console.log(moltiplicazione(5, 5))

let persona1 = new Persona()

persona1.saluta()

