import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobile : boolean = false;

  constructor(private location : PlatformLocation) { }

  ngOnInit() {
    this.location.onPopState(() => {
      if(this.mobile)
        this.toggleNav();
    })
  }

  toggleNav(){
    this.mobile = !this.mobile;
  }
}
