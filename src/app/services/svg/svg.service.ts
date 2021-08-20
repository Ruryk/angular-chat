import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  public readonly svgNamesList = [
    'attach',
    'bell',
    'calendar',
    'chevron-down',
    'file',
    'file-text',
    'film',
    'grid',
    'img',
    'chat',
    'more',
    'send',
    'person',
    'plus',
    'search',
    'settings',
    'smile',
    'power'
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  initSvg(): void {
    this.svgNamesList.forEach((svgName: string) => {
      this.matIconRegistry.addSvgIcon(
        svgName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/img/icons/${ svgName }.svg`)
      );
    });
  }
}
