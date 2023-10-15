import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

// interface Model
interface IModel {
  id: string;
  visible: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private models: IModel[] = [];
  registerModel(arg0: string) {}
  register(id: string) {
    this.models.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.models = this.models.filter(
      (element) => element.id !== id
      );
  }

  private visible = false;

  constructor() {}

  isModelVisible(id: string) : boolean{
    return !!this.models.find(element => element.id === id)?.visible;
  }

  toggleModel(id: string) {
    const model = this.models.find(element => element.id === id)
    if(model) {
      model.visible = !model.visible;
    } 
  }
}
