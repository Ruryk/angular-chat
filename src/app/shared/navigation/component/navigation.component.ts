import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ENavigationList } from '../navigation.interfaces';
import { CNavigationConfigList } from '../navigation.config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
 public readonly navigationConfig: ENavigationList[] = CNavigationConfigList;
}
