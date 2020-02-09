import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    RestoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
