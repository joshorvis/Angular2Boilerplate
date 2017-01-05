"use strict";
var router_1 = require('@angular/router');
var menu_component_1 = require('./menu/menu.component');
var host_panel_component_1 = require('./host-panel/host-panel.component');
var scoreboard_component_1 = require('./scoreboard/scoreboard.component');
var appRoutes = [
    {
        path: '',
        component: menu_component_1.MenuComponent
    }, {
        path: 'scoreboard',
        component: scoreboard_component_1.ScoreboardComponent
    }, {
        path: 'host',
        component: host_panel_component_1.HostPanelComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map