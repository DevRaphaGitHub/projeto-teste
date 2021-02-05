import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModalConfirmComponent } from './components/modal/modal-confirm/modal-confirm.component';
import { ModalEditComponent } from './components/modal/modal-edit/modal-edit.component';
import { ModalAddComponent } from './components/modal/modal-add/modal-add.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ClientesComponent,
        ModalEditComponent,
        ModalConfirmComponent,
        ModalAddComponent,
        NavBarComponent,
        SideBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        CommonModule,
        ChartsModule,
        MatListModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule,
        MatToolbarModule,
        MatDividerModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
