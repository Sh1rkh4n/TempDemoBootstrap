import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  ngOnInit(): void {
    // Find all buttons with the ripple-effect class
    var buttons = document.querySelectorAll('.ripple-effect');

    // Loop over each button and add a click event listener
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        // Cast the event object to a MouseEvent to access clientX and clientY
        var event = e as MouseEvent;

        // Get the button's position relative to the viewport
        var rect = button.getBoundingClientRect();

        // Calculate the X and Y coordinates of the click relative to the button's position
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Create a ripple element and add it to the button
        var ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.appendChild(ripple);

        // Remove the ripple element after a short delay
        setTimeout(function () {
          button.removeChild(ripple);
        }, 500);
      });
    });
  }

  @ViewChild('button') button!: ElementRef;
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left; //this.button.nativeElement.offsetLeft;
    const y = event.clientY - rect.top; //this.button.nativeElement.offsetTop;
    // const ripple = this.button.nativeElement.querySelector('btn btn-primary ripple-effect') as HTMLElement;
    // let rippleSpan = document.createElement('span');
    // rippleSpan.classList.add('ripple-effect');
    // target.appendChild(rippleSpan);
    const ripple = this.button.nativeElement.querySelector('.ripple-effect');
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.classList.add('clicked');
    setTimeout(() => ripple.classList.remove('clicked'), 150);
  }
}
