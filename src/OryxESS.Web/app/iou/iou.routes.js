"use strict";
var iouHeader_list_component_1 = require('./iouHeader-list.component');
var iouHeader_edit_component_1 = require('./iouHeader-edit.component');
exports.IouRoutes = [
    { path: 'iou', component: iouHeader_list_component_1.IouListComponent },
    { path: 'iou/:id', component: iouHeader_edit_component_1.IouEditComponent,
        children: [
            { path: 'edit', component: iouHeader_edit_component_1.IouEditComponent }
        ]
    }
];
//# sourceMappingURL=iou.routes.js.map