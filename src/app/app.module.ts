import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KartenComponent } from './karten/karten.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { DeckManagementService } from './shared/services/deck-management.service';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {CommonModule} from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    AppComponent,
    KartenComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MenuBarComponent,
    CommonModule,
    MatSidenavModule,
    MatDividerModule,

  ],
  providers: [DeckManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
