import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { WebRequestService } from 'src/app/web-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.css']
})
export class MobileSearchComponent implements OnInit {

  myControl = new FormControl();

  filteredBreeds!: Observable<string[]>;

  catBreed = '';

  catBreeds!: any[];

  catBreedsName: string[] = [];

  constructor(private webReq: WebRequestService, private router: Router) { }

  ngOnInit(): void {

    this.webReq.getCatBreeds().subscribe((response: any) => {
      this.catBreeds = response;
      for(let i = 0; i < this.catBreeds.length; i++) {
        let capitalBreed = [];
        capitalBreed.push(this.catBreeds[i].name);
        this.catBreedsName = capitalBreed.map((value) => value.toLowerCase());
      }
    })

    this.filteredBreeds = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  getOptionText(breed: any) {
    return breed ? breed : undefined;
  }

  search() {
    this.catBreed.toLowerCase();
    if(this.catBreed != '' && this.catBreedsName.includes(this.catBreed)) {
      this.router.navigate(['/about'], { queryParams: {name: this.catBreed}})
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.catBreedsName.filter(option => option.toLowerCase().includes(filterValue));
  }

}
