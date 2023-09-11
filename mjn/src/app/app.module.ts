import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MikaViewComponent } from './mika-view/mika-view.component';
import { NicoViewComponent } from './nico-view/nico-view.component';
import { JakovViewComponent } from './jakov-view/jakov-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MikaViewComponent,
    NicoViewComponent,
    JakovViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
