import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowserver = false;
  servercreation = 'no server is created';
  servername = '';
  constructor() { 
    setTimeout(() => {
      this.allowserver = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servercreation = 'server created';
  }

  oninput(event: Event)
  {
    console.log(event)
    this.servername = (<HTMLInputElement>event.target).value;
  }
}
