import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.css']
})
export class ImageTextComponent {

  @Input('overlayTextValue') overlayTextValue: string = '';
  @Input('imagePath') imagePath: string = 'assets/transparent.png';
  @Input('imageConfig') imageConfig: string = 'italic 90px Arial';
  @Input('imageColor') imageColor: string = 'black';

  

  

  //@ts-ignore
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  //@ts-ignore
  private context: CanvasRenderingContext2D;
  //@ts-ignore
  private image: HTMLImageElement;
  private overlayText: string = this.overlayTextValue;



  ngAfterViewInit(): void {
    //@ts-ignore
    this.context = this.canvas.nativeElement.getContext('2d');
    this.loadImage();
  }

  loadImage(): void {
    this.image = new Image();
    this.image.src = this.imagePath;
    this.image.onload = () => {
      this.canvas.nativeElement.width = this.image.width;
      this.canvas.nativeElement.height = this.image.height;
      this.drawOverlay();
    };
  }

  drawOverlay(): void {
    console.log(this.context);
    console.log(this.canvas);
    this.context.drawImage(this.image, 0, 0);
    this.context.font = 'italic 90px Arial';
    this.context.fillStyle = 'white';
    //this.context.strokeText('Hello', 50, 50);
    this.context.fillText(this.overlayTextValue, this.image.width / 4, 150);

    this.saveImage();
  }

  saveImage() {

    const canvas1 = document.getElementById('myCanvas') as HTMLCanvasElement;
    const link = document.createElement('a');

    canvas1.toBlob((blob) => {
      //@ts-ignore
      const url = URL.createObjectURL(blob);

      link.href = url;
      link.download = 'canvas.png';
      link.click();

      URL.revokeObjectURL(url);
    }, 'image/png');


  }


}
