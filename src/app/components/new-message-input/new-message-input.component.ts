import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-new-message-input",
  templateUrl: "./new-message-input.component.html",
  styleUrls: ["./new-message-input.component.scss"]
})
export class NewMessageInputComponent implements OnInit {
  @Input() sendMessage: Function;
  message: string = "";

  constructor() {}

  ngOnInit() {}

  handleMessageSend() {
    if (this.message !== "") {
      this.sendMessage(this.message);
      this.message = "";
    }
  }
}
