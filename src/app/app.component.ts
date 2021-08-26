import { Component, OnInit } from '@angular/core';

import { SvgService } from './services/svg/svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly title = 'chat';
  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.svgService.initSvg();
  }
}
