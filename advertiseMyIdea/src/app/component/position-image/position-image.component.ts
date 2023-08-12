import { Component } from '@angular/core';

@Component({
  selector: 'app-position-image',
  templateUrl: './position-image.component.html',
  styleUrls: ['./position-image.component.css']
})
export class PositionImageComponent {

  onSubmitForm() {
    console.log('submit works');
  }

}
