import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DataItem } from './../participant/participant.interface';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.page.html',
  styleUrls: ['./participants.page.scss'],
})

export class ParticipantsPage implements OnInit {

  participants: Array<DataItem> = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //console.log(this.participants);
    this.getParticipants()
  }

  getParticipants() {
      this.getDetails().subscribe((res) => {
          this.participants = res;
      })
  }

  getDetails() {
      return this.http.get<Array<DataItem>>("./../../assets/data/data.json")
  }

}
