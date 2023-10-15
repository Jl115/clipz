import { Component, Input, OnInit, ElementRef  } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  // providers: [ModelService]
})
export class ModelComponent implements OnInit{
  @Input() modelID = '';
  constructor(public model: ModelService, private elementRef: ElementRef ) { 

  }
closeModel() {
    this.model.toggleModel(this.modelID);
}
  
  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }
}
