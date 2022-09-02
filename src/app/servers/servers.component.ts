import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],

})
export class ServersComponent implements OnInit {
  allowserver = false;
  removeserver = false;
  servercreation = 'no server is created';
  servername = '';
  servers = ['server','server2'];
  severd = false;
  constructor() { 
    setTimeout(() => {
      this.allowserver = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.severd = true;
    this.removeserver = true;
    this.allowserver = false;
    this.servers.push(this.servername);
    this.servercreation = 'server created' + this.servername;
  }

  oninput(event: Event)
  {
    console.log(event)
    this.servername = (<HTMLInputElement>event.target).value;
  }


  myfun(){
    this.allowserver = true; 
    this.removeserver = false;
    this.servername = '';
    this.severd = false;
  }
}
