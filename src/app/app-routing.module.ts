import { KudoListComponent } from './kudo-list/kudo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveKudosComponent } from './give-kudos/give-kudos.component';
import { KudoListResolver } from './services/kudo-list-resolver.service';

const routes: Routes = [
  { path: 'my-kudos', component: KudoListComponent},
  { path: 'give-kudos', component: GiveKudosComponent },
  { path: '', redirectTo: '/give-kudos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
