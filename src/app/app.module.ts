import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MenudemoComponent } from './menudemo/menudemo.component';
import {
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { SidnavdemoComponent } from './sidnavdemo/sidnavdemo.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { IntropageComponent } from './pages/intro/intropage.component';
import { HomepageComponent } from './pages/home/homepage.component';
import { LayoutpageComponent } from './pages/layout/layoutpage.component';
import { ComponentspageComponent} from './pages/basiccomponents/componentspage.component';
import { ThemespageComponent } from './pages/themes/themespage.component';
import { EupcomponentspageComponent } from './pages/eupcomponents/eupcomponentspage.component';
import { PlaygroundpageComponent } from './pages/playground/playgroundpage.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import {RxService} from './services/RxService/rx.service';
import {HttpClientModule} from '@angular/common/http';
import { EupButtonComponent } from './eup-button/eup-button.component';
import { EupRadioButtonComponent } from './eup-radio-button/eup-radio-button.component';
import { EupCheckboxComponent } from './eup-checkbox/eup-checkbox.component';
import { EupDialogContentComponent } from './eup-dialog-content/eup-dialog-content.component';
import { EupCancelButtonComponent } from './eup-cancel-button/eup-cancel-button.component';
import { EupDialogHeaderComponent } from './eup-dialog-content/eup-dialog-header/eup-dialog-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenudemoComponent,
    SidnavdemoComponent,
    MainNavComponent,
    LayoutpageComponent,
    IntropageComponent,
    HomepageComponent,
    ComponentspageComponent,
    ThemespageComponent,
    EupcomponentspageComponent,
    PlaygroundpageComponent,
    ModalComponent,
    EupButtonComponent,
    EupCancelButtonComponent,
    EupRadioButtonComponent,
    EupCheckboxComponent,
    EupDialogContentComponent,
    EupDialogHeaderComponent,
    HomepageComponent,
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [RxService],
  entryComponents: [
    ModalComponent,
    EupDialogContentComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
