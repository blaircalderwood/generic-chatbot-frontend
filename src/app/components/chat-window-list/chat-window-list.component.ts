import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-window-list',
  templateUrl: './chat-window-list.component.html',
  styleUrls: ['./chat-window-list.component.scss']
})
export class ChatWindowListComponent implements OnInit {

  @Input() messages: [];
  
  constructor() { }

  ngOnInit() {
  }

}
