import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModelComponent } from './auth-model/auth-model.component';

// components imports
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthModelComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuthModelComponent
  ]
})
export class UserModule { }
