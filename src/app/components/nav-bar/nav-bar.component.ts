import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../side-bar/side-bar.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor(public sidebar: SideBarService) { }

    ngOnInit(): void {   
    }

    toggleSidebar() {
        this.sidebar.toggle();
    }

}
