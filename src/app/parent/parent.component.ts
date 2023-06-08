import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  currentItem = 'television'
  public getDataFromChild(item: string){
    console.log('data from child:', item)
  }
}
