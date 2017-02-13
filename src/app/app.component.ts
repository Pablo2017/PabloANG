//importer la class pour créer un composant
import { Component } from '@angular/core';
// définir le décorateur @component
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}, how are you doing today ?No Fuss no mess !</h1>`,
  styles:[`
  h1{
    color:red;
    text-transform:uppercase;
    
  }
  `]
}) 
//Exporter la class du composant
export class AppComponent  { name = 'Julien'; }
 