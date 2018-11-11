import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TasksRoutingModule } from './tasks-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TranslateModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
