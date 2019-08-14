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
import { IntropageComponent } from './pages/intropage/intropage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component';
import { ComponentspageComponent} from './pages/basiccomponentspage/componentspage.component';
import { ThemespageComponent } from './pages/themespage/themespage.component';
import { EupcomponentspageComponent } from './pages/eupcomponentspage/eupcomponentspage.component';
import { PlaygroundpageComponent } from './pages/playgroundpage/playgroundpage.component';
import { DreupcomponentspageComponent } from './pages/dreupcomponentpage/dreupcomponentspage.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RxService } from './services/RxService/rx.service';
import { HttpClientModule } from '@angular/common/http';
import { EupButtonComponent } from './eupcomponents/eup-button/eup-button.component';
import { EupRadioButtonComponent } from './eupcomponents/eup-radio-button/eup-radio-button.component';
import { EupCheckboxComponent } from './eupcomponents/eup-checkbox/eup-checkbox.component';
import { EupDialogContentComponent } from './eupcomponents/eup-dialog-content/eup-dialog-content.component';
import { EupCancelButtonComponent } from './eupcomponents/eup-cancel-button/eup-cancel-button.component';
import { EupDialogHeaderComponent } from './eupcomponents/eup-dialog-content/eup-dialog-header/eup-dialog-header.component';
import { DrDialogHeaderComponent } from './dreupcomponents/dr-dialog-content/dr-dialog-header/dr-dialog-header.component';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DrDialogContentComponent } from './dreupcomponents/dr-dialog-content/dr-dialog-content.component';
import { DrDialogCloseButtonComponent } from './dreupcomponents/dr-dialog-content/dr-dialog-close-button/dr-dialog-close-button.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidnavdemoComponent,
    MainNavComponent,
    LayoutpageComponent,
    IntropageComponent,
    HomepageComponent,
    ComponentspageComponent,
    ThemespageComponent,
    EupcomponentspageComponent,
    DreupcomponentspageComponent,
    PlaygroundpageComponent,
    EupButtonComponent,
    EupCancelButtonComponent,
    EupRadioButtonComponent,
    EupCheckboxComponent,
    EupDialogContentComponent,
    EupDialogHeaderComponent,
    DrDialogHeaderComponent,
    HomepageComponent,
    DialogContentExampleDialogComponent,
    DrDialogContentComponent,
    DrDialogCloseButtonComponent
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
    ReactiveFormsModule
  ],
  providers: [RxService],
  entryComponents: [
    EupDialogContentComponent,
    DialogContentExampleDialogComponent,
    DrDialogContentComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
