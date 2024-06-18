import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { PreviewComponent } from './preview/preview.component';

export const routes: Routes = [
  
  {path:'',redirectTo:'credit-form',pathMatch:'full'},
  { path: 'credit-form', component: CreditFormComponent },
  {path:'preview', component: PreviewComponent},
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }