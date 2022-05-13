import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-most-searched',
  templateUrl: './most-searched.component.html',
  styleUrls: ['./most-searched.component.css']
})
export class MostSearchedComponent implements OnInit {

  mostSearched!: any[];

  constructor(private webReq: WebRequestService) { }

  ngOnInit(): void {
    this.webReq.getMostSearched().subscribe((response: any) => {
      this.mostSearched = response;
    })
  }

}
