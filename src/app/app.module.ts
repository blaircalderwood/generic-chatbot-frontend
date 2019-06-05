import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewMessageInputComponent } from './components/new-message-input/new-message-input.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { SentMessageComponent } from './components/sent-message/sent-message.component';
import { ReceivedMessageComponent } from './components/received-message/received-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMessageInputComponent,
    ChatWindowComponent,
    SentMessageComponent,
    ReceivedMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
