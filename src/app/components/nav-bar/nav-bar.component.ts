import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor(private sidenav: MatSidenav) { }

    ngOnInit(): void {
        
    }

    toggleMenu() {
        
    }

}
