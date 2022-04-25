import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PostcodeComponent } from './postcode/postcode.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'postcode', component: PostcodeComponent },
  { path: '', redirectTo: 'postcode', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
