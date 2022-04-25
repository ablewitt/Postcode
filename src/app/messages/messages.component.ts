import { Component, OnInit } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService : MessageService) { }
  ngOnInit(): void {
  }

}
