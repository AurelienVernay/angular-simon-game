import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SimonComponent } from './simon/simon.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SimonComponent, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
