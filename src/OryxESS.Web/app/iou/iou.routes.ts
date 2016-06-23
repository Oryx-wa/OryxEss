import { RouterConfig } from '@angular/router';
import { IouComponent }   from './iou.component';
import { IouListComponent }   from './iouHeader-list.component';
import { IouEditComponent } from './iouHeader-edit.component';
import { IouCreateComponent } from './iouHeader-create.component';


export const IouRoutes: RouterConfig = [
     { path: 'iou', component: IouListComponent},
    { path:'iou/:id', component: IouEditComponent,
        children: [
            {path:'edit', component: IouEditComponent}
        
        ]  
    }    
    ];

