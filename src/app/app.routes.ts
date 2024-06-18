import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { PreviewComponent } from './preview/preview.component';

export const routes: Routes = [
  
  {path:'',redirectTo:'preview',pathMatch:'full'},
  { path: 'credit-form', component: CreditFormComponent },
<<<<<<< HEAD
  {path:'preview', component: PreviewComponent},
=======
  {path:'preview', component:PreviewComponent},
>>>>>>> d9b2aec434f55423d906c01e7f1765cd81a957a0
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }