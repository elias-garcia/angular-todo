import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, ModalComponent],
  exports: [NavbarComponent, ModalComponent]
})
export class CoreModule { }
