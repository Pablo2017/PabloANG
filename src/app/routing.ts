//importer les class nécessaires à l'utilisation des routes
import { ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

// Importer les composants à utiliser dans les routes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

//déclarer une constante de type Routes=variable non modifiable
const appRoutes: Routes = [

// définition des routes dans un tableau qui vont prendre des propriétés
{
// redirection de la page d'accueil
path:'',
redirectTo: 'dashboard',
pathMatch:'full'

},
{
    path:'dashboard',
    //définir le composant à utiliser
    component: DashboardComponent 
},
{
    path:'add-student',
    //définir le composant à utiliser
    component:  AddstudentComponent  
},
{
    path:'edit-student',
    //définir le composant à utiliser
    component: EditStudentComponent 
}
]
// exporter la cste des routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 