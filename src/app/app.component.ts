import { Component } from '@angular/core';
import { CommonDataService } from '../services/common-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public commonDataService: CommonDataService){}
}
