import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulrproject';
  nameSearch:string=" "
  productArr=[
    {
      sno:1,
      name:'mobile',
      price:'70000rs',
      availability:'available'
    },
    {
      sno:2,
      name:'tv',
      price:'100000rs',
      availability:'available'
    },
    {
      sno:3,
      name:'lappy',
      price:'340000rs',
      availability:' not available'
    },
    {
      sno:4,
      name:'mobile',
      price:'80000rs',
      availability:'available'
    },
    {
      sno:5,
      name:'mobile',
      price:'50000rs',
      availability:' not available'
    },
  ]
}
