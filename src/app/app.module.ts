import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupCardComponent } from './modules/home/popup-card/popup-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardModeComponent } from './modules/about-magic/modes/card-mode/card-mode.component';
import { LandingComponent } from './modules/landing/landing.component';
import { HeaderComponent } from "./shared/header/header.component";
import { BannerComponent } from './modules/landing/banner/banner.component';
import { ItemsComponent } from './modules/landing/items/items.component';
import { HowSingupComponent } from './modules/landing/how-singup/how-singup.component';


@NgModule({
    declarations: [
        AppComponent,
        PopupCardComponent,
        LandingComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        RouterModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        FormsModule,
        CardModeComponent,
        HeaderComponent,
        BannerComponent,
        ItemsComponent,
        HowSingupComponent
    ]
})
export class AppModule { }
