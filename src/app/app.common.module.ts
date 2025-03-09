import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AsyncPipe,
  ]
})
export class AppCommonModule { }
