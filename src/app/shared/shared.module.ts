import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model/model.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ModelService } from '../services/model.service';



@NgModule({
  declarations: [
    ModelComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [ 
    ModelComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent
  ],
  // providers: [
  //   ModelService
  // ]
})
export class SharedModule { }
