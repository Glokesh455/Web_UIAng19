import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cards=['','','','','','','','']
  gridtext=[
    {
      img:'download.jpg',
      name:'one'
    },
    {
      img:'download.jpg',
      name:'one'
    },
    {
      img:'download.jpg',
      name:'one'
    },
    {
      img:'download.jpg',
      name:'one'
    }

   ]
   products = [
    { img: 'download.jpg', name: 'Zukes mini dog treats', description: "Zuke's Mini Naturals with Added Vitamins", originalPrice: 10, discountedPrice: 7, discount: 10, rating: 5.0, reviews: 123 },
    { img: 'download.jpg', name: 'Zukes mini dog treats', description: "Zuke's Mini Naturals with Added Vitamins", originalPrice: 10, discountedPrice: 7, discount: 10, rating: 5.0, reviews: 123 },
    { img: 'download.jpg', name: 'Zukes mini dog treats', description: "Zuke's Mini Naturals with Added Vitamins", originalPrice: 10, discountedPrice: 7, discount: 10, rating: 5.0, reviews: 123 },
    { img: 'download.jpg', name: 'Zukes mini dog treats', description: "Zuke's Mini Naturals with Added Vitamins", originalPrice: 10, discountedPrice: 7, discount: 10, rating: 5.0, reviews: 123 },
   
   
  
  ];



  bannermsg = [
    {
      productdis: 'Trending Product',
      btntxt: 'Show All Products',
      disc: '___ Everyday listed new products from our trusted seller ___'
    }
    ,
    {
      productdis: 'Offers on Top Brand',
      btntxt: 'Show All Products',
      disc: '___ Everyday listed new products from our trusted seller ___'
    }
    ,
    {
      productdis: 'Best Seling items',
      btntxt: 'Show All Products',
      disc: '___ Everyday listed new products from our trusted seller ___'
    },
    {
      productdis: 'Browsing History',
      btntxt: 'Show All Products',
      disc: '___ Everyday listed new products from our trusted seller ___'
    }
  ]
}
