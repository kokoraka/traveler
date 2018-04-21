import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  tickets = [];

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.tickets = response.json();
    });
  }

}
