import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HostPanelComponent } from './host-panel/host-panel.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { routing } from './app.routing';

@NgModule({
    imports:      [ BrowserModule,FormsModule,HttpModule,routing ],
    declarations: [ AppComponent,MenuComponent,HostPanelComponent,ScoreboardComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }