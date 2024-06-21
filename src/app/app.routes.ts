import { RouterModule, Routes } from '@angular/router';
import { CreditFormComponent } from './credit-form/credit-form.component';

export const routes: Routes = [
  
  {path:'',redirectTo:'credit-form',pathMatch:'full'},
  { path: 'credit-form', component: CreditFormComponent },
  // other routes
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes),HttpClientModule],
//   exports: [RouterModule],
// })
// export class AppRoutingModule { }

