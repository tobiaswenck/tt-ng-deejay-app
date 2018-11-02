import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-preview',
  templateUrl: './charts-preview.component.html',
  styleUrls: ['./charts-preview.component.scss']
})
export class ChartsPreviewComponent implements OnInit {

  artistName = "Bonez MC";
  songName = "Palmen aus Plastik";
  releaseDate = "20.04.2000";

  constructor() { }

  ngOnInit() {
  }

}
