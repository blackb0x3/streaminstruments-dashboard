import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppearancePage } from './pages/appearance/appearance.page';
import { NotificationsPage } from './pages/notifications/notifications.page';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    AppearancePage,
    NotificationsPage,
  ],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
