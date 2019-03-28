import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewListComponent } from './view-list/view-list.component';
import { GetListService } from './get-list.service';
import {GetDistService} from './get-dist.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    FormsModule
  ],
  providers: [GetListService,GetDistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
