import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { DataService } from './data.service';
import { RestoReviewListComponent } from './resto-review-list/resto-review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RestoListComponent,
    RestoReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
