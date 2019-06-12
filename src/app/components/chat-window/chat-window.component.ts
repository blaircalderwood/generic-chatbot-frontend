import { Component, OnInit } from "@angular/core";
import { BotService } from "../../services/bot/bot.service";
import { Message } from "../../models/message.model";

@Component({
  selector: "app-chat-window",
  templateUrl: "./chat-window.component.html",
  styleUrls: ["./chat-window.component.scss"]
})
export class ChatWindowComponent implements OnInit {
  messages: Message[] = [];

  constructor(private botService: BotService) {}

  ngOnInit() {}

  sendMessage = async text => {
    this.messages.push(new Message(true, text));

    const responseMessage = await this.botService.sendMessage(text);

    this.messages.push(new Message(false, responseMessage));
  };
}
