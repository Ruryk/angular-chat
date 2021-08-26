import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './component/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'chat',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/template/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('src/app/template/chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('src/app/template/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('src/app/template/notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('src/app/template/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('src/app/template/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
