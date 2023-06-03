import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'screen-view',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  public url: SafeResourceUrl = "http://localhost:5500";
  public time: string = "";

  constructor(private sanitizer: DomSanitizer) {
  }


  loadURL(url: string) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    localStorage.setItem("url", url)

  }


  readonly deviceList: string[] = ["IPhone", "MacBook", "IMac"];

  changeDevice(device: string) {
    console.log(device);
    localStorage.setItem("device-name", device);
    location.reload();
  }

  ngOnInit() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    this.time = `${hours}:${minutes}`


    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(localStorage.getItem("url")!);

    // @ts-ignore

    // @ts-ignore
  }

  protected readonly localStorage = localStorage;
}
