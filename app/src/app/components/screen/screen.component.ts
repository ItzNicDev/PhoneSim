import {Component} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'screen-view',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {

  iframeSrc: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  update(value: string) {

    if (value == "4200") {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/");

    }
    if (value == "5500") {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:5500/");

    } else {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(value);

    }

  }
}
