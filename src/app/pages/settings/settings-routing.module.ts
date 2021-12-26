import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { AppearancePage } from './pages/appearance/appearance.page';
import { NotificationsPage } from './pages/notifications/notifications.page';

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.settings.appearance,
    component: AppearancePage,
  },
  {
    path: ROUTER_UTILS.config.settings.notifications,
    component: NotificationsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
