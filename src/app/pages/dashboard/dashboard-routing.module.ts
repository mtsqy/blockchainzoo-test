import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ContactsComponent } from 'src/app/pages/views/contacts/contacts.component';

const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { 
        path: "home",
        loadChildren: () => import('../views/home/home.module').then(m => m.HomeModule)
      },
      { 
        path: "task/:id",
        loadChildren: () => import('../views/task/task.module').then(m => m.TaskModule)
      },
      {
        path: "contacts",
        component: ContactsComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
