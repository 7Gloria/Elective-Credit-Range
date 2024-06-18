import { Routes } from '@angular/router';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { PreviewComponent } from './preview/preview.component';

export const routes: Routes = [
  
  {path:'',redirectTo:'preview',pathMatch:'full'},
  { path: 'credit-form', component: CreditFormComponent },
  {path:'preview', component:PreviewComponent},
  // other routes
];