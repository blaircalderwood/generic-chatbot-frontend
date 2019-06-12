import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewMessageInputComponent } from './components/new-message-input/new-message-input.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { SentMessageComponent } from './components/sent-message/sent-message.component';
import { ReceivedMessageComponent } from './components/received-message/received-message.component';
import { ChatWindowListComponent } from './components/chat-window-list/chat-window-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewMessageInputComponent,
    ChatWindowComponent,
    SentMessageComponent,
    ReceivedMessageComponent,
    ChatWindowListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
