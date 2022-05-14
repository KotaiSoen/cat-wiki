import { Component, HostListener, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl();

  filteredBreeds!: Observable<string[]>;

  catBreed = '';

  catBreeds!: any[];

  catBreedsName: string[] = [];

  randomImages!: any[];

  innerWidth!: number;

  constructor(private webReq: WebRequestService, private router: Router) { }

  ngOnInit(): void {
    this.webReq.getRandomImages().subscribe((response: any) => {
      this.randomImages = response; 
    })

    this.webReq.getCatBreeds().subscribe((response: any) => {
      this.catBreeds = response;
      for(let i = 0; i < this.catBreeds.length; i++) {
        this.catBreedsName.push(this.catBreeds[i].name)
      }
    })

    this.filteredBreeds = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )

    this.innerWidth = window.innerWidth;
  }

  getOptionText(breed: any) {
    return breed ? breed : undefined;
  }

  search() {
    if(this.catBreed != '' && this.catBreedsName.includes(this.catBreed)) {
      this.router.navigate(['/about'], { queryParams: {name: this.catBreed}})
    }
  }

  redirectToDetails(name: string) {
    this.catBreed = name;
    this.search();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.catBreedsName.filter(option => option.toLowerCase().includes(filterValue));
  }

  
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.innerWidth = window.innerWidth;
}
  
}
