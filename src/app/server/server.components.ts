import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
   selector: 'app-server',
   templateUrl: './server.component.html'
})
export class ServerComponent{
   serverstatus: string = Math.random() > 0.5 ? 'online' : 'ofline';
   serverId: number = 10

   getserverstatus(){
      return this.serverstatus;
   }

   getColor(){
      return this.serverstatus === 'online' ? 'green' : 'red'
   }
}