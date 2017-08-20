import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { appRouting } from './app.routes';

import { InfoService } from './services/info.service';
import { ProductsService } from './services/products.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { PortfolioComponent, AboutComponent, ItemComponent } from './components/index.pages';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting
  ],
  providers: [InfoService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
