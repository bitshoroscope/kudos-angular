import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { KudoListResolver } from './services/kudo-list-resolver.service';
import { DBService } from './services/db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KudoComponent } from './components/kudo/kudo.component';
import { KudoListComponent } from './components/kudo-list/kudo-list.component';
import { GiveKudosComponent } from './components/give-kudos/give-kudos.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KudoComponent,
    KudoListComponent,
    GiveKudosComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    DBService,
    KudoListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
