import { Routes } from '@angular/router';
import { TwoWayComponent } from './two-way/two-way.component';
import { searchUserComponent } from './admin/search-user/search-user.component';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

    },
    {
        path:'add-user',
        loadComponent: () => import('./admin/add-user/add-user.component').then( c=> c.AddUserComponent)
    },
    {
        path: 'two-way',
        component: TwoWayComponent
    },
    {
        path: 'search-user',
        component: searchUserComponent
    }
    


];
