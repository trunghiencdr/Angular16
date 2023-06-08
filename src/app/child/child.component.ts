import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() childItem = '' 
  @Output() emitItemFromChild = new EventEmitter()

  public clickEvent(item: string){
    console.log('call click event')
    this.emitItemFromChild.emit(this.childItem +'-' +item)
  }
}
