import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { GenericComponent } from './generic/generic.component';
import { HomeComponent } from './home/home.component';
import { ElementsComponent } from './elements/elements.component';
import { GenmainComponent } from './genmain/genmain.component';
import { ElementmainComponent } from './elementmain/elementmain.component';
import { Theme1Component } from './theme1/theme1.component';
import { Theme2Component } from './theme2/theme2.component';
import { Theme3Component } from './theme3/theme3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MainComponent,
    GenericComponent,
    HomeComponent,
    ElementsComponent,
    GenmainComponent,
    ElementmainComponent,
    Theme1Component,
    Theme2Component,
    Theme3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
