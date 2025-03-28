import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  @Input() bannermessage: any;
  @Input() products: any;
  carouselIndex: number = 0;

  chunkedProducts: any[] = [];
  mobileview:any[]=[]
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.products) {
      this.chunkProducts(7);
      this.mobile(2)
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

chunkProducts(chunkSize: number) {
  for (let i = 0; i < this.products.length; i += chunkSize) {
    this.chunkedProducts.push(this.products.slice(i, i + chunkSize));
  }
}
mobile(chunkSize: number) {
  for (let i = 0; i < this.products.length; i += chunkSize) {
    this.mobileview.push(this.products.slice(i, i + chunkSize));
  }
}
}
