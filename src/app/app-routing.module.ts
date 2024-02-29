import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'views' },
  { path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
  { path:'landingpage', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
