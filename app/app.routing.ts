import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HostPanelComponent } from './host-panel/host-panel.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const appRoutes: Routes = [
    {
        path: ''
        ,component: MenuComponent
    },{
        path: 'scoreboard'
        ,component: ScoreboardComponent
    },{
        path: 'host'
        ,component: HostPanelComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
