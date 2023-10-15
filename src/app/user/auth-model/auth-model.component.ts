import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-auth-model',
  templateUrl: './auth-model.component.html',
  styleUrls: ['./auth-model.component.css']
})
export class AuthModelComponent implements OnInit, OnDestroy {

  constructor(public model: ModelService) { }
  ngOnDestroy(): void {
    this.model.unregister('auth');
  }

  ngOnInit(): void {
    this.model.register('auth');
  }

}


