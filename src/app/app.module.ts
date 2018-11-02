import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FollowingComponent } from './components/following/following.component';
import { ProfilePreviewComponent } from './components/profile-preview/profile-preview.component';
import { ChartsPreviewComponent } from './components/charts-preview/charts-preview.component';
import { PlayerPreviewComponent } from './components/player-preview/player-preview.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { NewArtistsComponent } from './components/new-artists/new-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowingComponent,
    ProfilePreviewComponent,
    ChartsPreviewComponent,
    PlayerPreviewComponent,
    MenuComponent,
    FooterMenuComponent,
    NewArtistsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
