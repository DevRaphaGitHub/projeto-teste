import { Component, OnInit } from '@angular/core';
import { SideBarService } from './side-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddComponent } from '../modal/modal-add/modal-add.component';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

    setVisible = this.sidebar.visible;

    constructor(
        private modal: MatDialog,
        public sidebar: SideBarService
    ) { }

    ngOnInit(): void {
        
    }

    async openModalAdd() {
        let modal = this.modal.open(ModalAddComponent);
        await modal.afterClosed().toPromise();
        this.ngOnInit();
    }
}
