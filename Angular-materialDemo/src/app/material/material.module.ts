import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
// import { CommonModule } from '@angular/common';

const MaterialComponents = [
  MatButtonModule
];



@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
