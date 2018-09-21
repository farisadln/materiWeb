import { AboutFarisComponent } from './about/about-faris/about-faris.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderFarisComponent } from './header-faris/header-faris.component';
import { AboutComponent } from './about/about.component';
import { FooterFarisComponent } from './footer-faris/footer-faris.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderFarisComponent,
      AboutComponent,
      FooterFarisComponent,
      AboutFarisComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
