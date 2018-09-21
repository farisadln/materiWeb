import { About } from './../about.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-faris',
  templateUrl: './about-faris.component.html',
  styleUrls: ['./about-faris.component.css']
})
export class AboutFarisComponent implements OnInit {
  abouts: About[] = [
    new About('Hari Santosa', 'Turen Malang ','Malang','Turen ','Karyawan','081231712344' ,'https://static.businessinsider.sg/2018/02/02/5a7dc169d03072af008b4bf2.png'),
    new About('Siswiyanti', 'Trenggalek ','Malang','Turen ','Ibu Rumah Tangga','081231712344' ,'https://static.businessinsider.sg/2018/02/02/5a7dc169d03072af008b4bf2.png'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
