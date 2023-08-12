import { Component } from '@angular/core';

@Component({
  selector: 'app-imageconfig',
  templateUrl: './imageconfig.component.html',
  styleUrls: ['./imageconfig.component.css']
})
export class ImageconfigComponent {
    //@ts-ignore
  imagePath: string;
    //@ts-ignore
  overlayTextValue: string;
    //@ts-ignore
  imageConfig: string;
    //@ts-ignore
  imageColor: string ='green';

  selectedImage: string = 'assets/transparent.png';
  inputValue1!: string;
  inputValue2!: string;
  isSubmitted: boolean = false;;

  images: string[] = [
    'assets/food1.png',
    'assets/food2.png'
  ];

  onSelectImage(image: string) {
    this.selectedImage = image;
  }

  onSubmitForm() {
    // Handle form submission
    this.imagePath = this.selectedImage;
    this.overlayTextValue = this.inputValue1;
    this.imageConfig = this.inputValue2;

    this.isSubmitted = !this.isSubmitted;
    console.log('Submitted!', this.selectedImage, this.inputValue1, this.inputValue2);
  }

}
