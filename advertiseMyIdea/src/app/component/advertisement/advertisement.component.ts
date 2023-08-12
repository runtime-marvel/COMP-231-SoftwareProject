import { Component } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent {

  overlayStyles: any = {};
  startX: any;
  startY: any;

  onMouseDown(event: MouseEvent) {

    console.log('onMouseDown');
    this.startX = event.clientX;
    this.startY = event.clientY;

    this.overlayStyles = {
      top: `${this.startY}px`,
      left: `${this.startX}px`,
      width: '0',
      height: '0'
    };

    document.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    console.log('onMouseMove');
    const currentX = event.clientX;
    const currentY = event.clientY;

    const width = Math.abs(currentX - this.startX);
    const height = Math.abs(currentY - this.startY);

    this.overlayStyles = {
      ...this.overlayStyles,
      width: `${width}px`,
      height: `${height}px`
    };

    console.log(this.overlayStyles);
  }

  onMouseUp(event: MouseEvent) {
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }

}
