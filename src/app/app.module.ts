import { KudoListResolver } from './services/kudo-list-resolver.service';
import { DBService } from './services/db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KudoComponent } from './kudo/kudo.component';
import { KudoListComponent } from './kudo-list/kudo-list.component';
import { GiveKudosComponent } from './give-kudos/give-kudos.component';

@NgModule({
  declarations: [
    AppComponent,
    KudoComponent,
    KudoListComponent,
    GiveKudosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DBService,
    KudoListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
