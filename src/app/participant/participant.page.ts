import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataItem } from './participant.interface';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.page.html',
  styleUrls: ['./participant.page.scss'],
})
export class ParticipantPage implements OnInit {

  data: DataItem = null;

  isLoaded: boolean = false

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.getItem(Number(id))
  }
  
  

  getItem(id) {
      this.getDetails(id).subscribe((item) => {
          this.data = item;
          setTimeout(() => {
            this.isLoaded = true
          }, 300);
      })
  }

  getDetails(id: number) {
      return this.http.get<Array<DataItem>>("./../../assets/data/data.json")
        .pipe(
          map((items: Array<DataItem>) => {
            return items.find((item: DataItem) => {
              return item.id === id;
            });
          })
        );
  }

}
