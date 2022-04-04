import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLabelColor]',
})
export class LabelColorDirective implements OnInit {
  @Input('appLabelColor')
    baseData!: string;

  private month = 2592000000;

  private sevenDays = 604800000;

  private currentDate: number = +(new Date());

  constructor(private elem: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    // console.log('Current date:' + this.currentDate)
    // console.log('Base date:' + Date.parse(this.baseData))
    // console.log('Difference:' + (this.currentDate - Date.parse(this.baseData)))
    if ((this.currentDate - Date.parse(this.baseData)) < this.sevenDays) {
      console.log(this.render.setStyle(this.elem.nativeElement, 'background-color', 'blue'));
    } else if ((this.currentDate - Date.parse(this.baseData)) < this.month) {
      this.render.setStyle(this.elem.nativeElement, 'background-color', 'green');
    } else {
      this.render.setStyle(this.elem.nativeElement, 'background-color', 'red');
    }
  }
}
