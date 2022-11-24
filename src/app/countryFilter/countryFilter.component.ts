import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'country-filter',
  templateUrl: './countryFilter.component.html',
  styleUrls: ['./countryFilter.component.scss']
})

export class CountryFilter implements OnInit {
  @Input() countryList: string[];
  filteredCountry: string[] = [];
  country: string = '';
  flag: boolean = false;

  ngOnInit() {
    this.filteredCountry = this.countryList;
  }

  filter(): void {
    this.filteredCountry = [];
    this.countryList.forEach(element=>{
      let temp = element;
      if(temp.toLowerCase().includes(this.country.trim().toLowerCase())) {
        this.filteredCountry.push(element);
      }
      if(this.filteredCountry.length>0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    });
  }
}
