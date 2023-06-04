import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Phone Website Testing';

  ngOnInit() {
    // localStorage.setItem("device-name", "IPhone")
  }


}
