import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService]
})
export class HomeComponent implements OnInit {

  public offers: Array<Offer>;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffers()
      .then((offers: Array<Offer>) => {
        this.offers = offers;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

}
