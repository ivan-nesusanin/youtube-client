import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLabelColor]',
})
export class LabelColorDirective implements OnInit {
  @Input() appLabelColor = '';

  constructor(private elem: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    const delta = Math.floor((new Date().getTime() - new Date(this.appLabelColor).getTime()) / (24 * 3600 * 1000));
    if (delta < 7) {
      this.render.setStyle(this.elem.nativeElement, 'background-color', 'blue');
    } else if (delta < 30) {
      this.render.setStyle(this.elem.nativeElement, 'background-color', 'green');
    } else {
      this.render.setStyle(this.elem.nativeElement, 'background-color', 'red');
    }
  }
}
