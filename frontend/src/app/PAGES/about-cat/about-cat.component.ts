import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed } from 'src/app/breed';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-about-cat',
  templateUrl: './about-cat.component.html',
  styleUrls: ['./about-cat.component.css']
})
export class AboutCatComponent implements OnInit {

  breeds!: Breed[];

  breedUrl!: string;

  name!: string;

  constructor(private route: ActivatedRoute, private webReq: WebRequestService) { 
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
    })
  }

  ngOnInit(): void {
    // this.name = this.route.snapshot.queryParamMap.get('name');
    this.webReq.getOneBreed(this.name).subscribe((response: Breed[]) => {
      this.breeds = response;
      this.webReq.getOneImage(this.breeds[0].reference_image_id).subscribe((response: any) => {
        this.breedUrl = response.url;
      })
    })

  }

}
