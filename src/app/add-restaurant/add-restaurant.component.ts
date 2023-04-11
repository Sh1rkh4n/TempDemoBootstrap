import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent {
  @ViewChild('button') button!: ElementRef;

  onButtonClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.classList.remove('clicked');
    void target.offsetWidth;
    target.classList.add('clicked');

    target.querySelector('.ripple-effect:after')?.setAttribute('style', `top: ${y}px; left: ${x}px;`);
  }

  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left; //this.button.nativeElement.offsetLeft;
    const y = event.clientY - rect.top; //this.button.nativeElement.offsetTop;
    const ripple = this.button.nativeElement.querySelector('.ripple-effect') as HTMLElement;

    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.classList.add('clicked');
    setTimeout(() => ripple.classList.remove('clicked'), 150);
  }
}
