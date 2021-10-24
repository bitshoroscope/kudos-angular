import { LoginComponent } from './components/login/login.component';
import { KudoListComponent } from './components/kudo-list/kudo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveKudosComponent } from './components/give-kudos/give-kudos.component';
import { KudoListResolver } from './services/kudo-list-resolver.service';

const routes: Routes = [
  { path: 'my-kudos', component: KudoListComponent},
  { path: 'give-kudos', component: GiveKudosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/give-kudos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
