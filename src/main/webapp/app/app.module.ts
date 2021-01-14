import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StooreSharedModule } from 'app/shared/shared.module';
import { StooreCoreModule } from 'app/core/core.module';
import { StooreAppRoutingModule } from './app-routing.module';
import { StooreHomeModule } from './home/home.module';
import { StooreEntityModule } from './entities/entity.module';
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
    StooreSharedModule,
    StooreCoreModule,
    StooreHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    StooreEntityModule,
    StooreAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class StooreAppModule {}
