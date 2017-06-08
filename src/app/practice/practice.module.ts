import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice.component';
import { PracticeNewComponent } from './practice-new/practice-new.component';
import { PracticeListComponent } from './practice-list/practice-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PracticeComponent, PracticeNewComponent, PracticeListComponent]
})
export class PracticeModule { }
