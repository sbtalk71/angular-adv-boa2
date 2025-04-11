import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  imports: [CommonModule,CdkDrag,CdkDropList],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent {

  fruits=[
    'apple','banana','pears','orange','mango','guava'
  ]

}
