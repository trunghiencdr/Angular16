import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = 'green'

  constructor(private el: ElementRef) { 
    console.log('constructor highlight', this.appHighLight)
    this.el.nativeElement.style.backgroundColor = this.appHighLight;
  }

  ngOnInit(): void {
    console.log('ngOnInit highlight', this.appHighLight)
    this.el.nativeElement.style.color = this.appHighLight
  }

}
