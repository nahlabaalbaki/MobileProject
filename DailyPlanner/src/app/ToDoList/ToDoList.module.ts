import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoListPage } from './ToDoList.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ToDoListPageRoutingModule } from './ToDoList-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ToDoListPageRoutingModule
  ],
  declarations: [ToDoListPage]
})
export class ToDoListPageModule {}
