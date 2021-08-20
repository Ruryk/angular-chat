import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/custom-ui/button/button.component';
import { ChatCardComponent } from './shared/custom-ui/chat-card/chat-card.component';
import { SelectComponent } from './shared/custom-ui/select/select.component';
import { InputComponent } from './shared/custom-ui/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ChatCardComponent,
    SelectComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
