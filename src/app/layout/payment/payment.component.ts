import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../../services/dummy.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private data: any;
  constructor(private dummyService: DummyService) { }

  ngOnInit() {
    this.dummyService.getJsonPhotoData().subscribe((res) => {
      this.data = res;
    });
  }

}
