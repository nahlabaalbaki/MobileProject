import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListPage } from './ToDoList.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListPageRoutingModule {}
