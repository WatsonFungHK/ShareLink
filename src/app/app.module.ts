import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterPipe } from './filter.pipe';
import { AddLinkComponent } from './add-link/add-link.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    SearchComponent,
    ProfileComponent,
    FilterPipe,
    AddLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
