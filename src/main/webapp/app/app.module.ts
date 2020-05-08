import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Client2SharedModule } from 'app/shared/shared.module';
import { Client2CoreModule } from 'app/core/core.module';
import { Client2AppRoutingModule } from './app-routing.module';
import { Client2HomeModule } from './home/home.module';
import { Client2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Client2SharedModule,
    Client2CoreModule,
    Client2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Client2EntityModule,
    Client2AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Client2AppModule {}
