import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'about', loadChildren: './about-festeval/about-festeval.module#AboutFestevalPageModule' },
  { path: 'pleace', loadChildren: './festevals-pleace/festevals-pleace.module#FestevalsPleacePageModule' },
  { path: 'time', loadChildren: './time-table/time-table.module#TimeTablePageModule' },
  { path: 'participants', loadChildren: './participants/participants.module#ParticipantsPageModule' },
  { path: 'connect', loadChildren: './connect/connect.module#ConnectPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'language-popover', loadChildren: './language-popover/language-popover.module#LanguagePopoverPageModule' },
  { path: 'participant/:id', loadChildren: './participant/participant.module#ParticipantPageModule' },  { path: 'boglanish', loadChildren: './boglanish/boglanish.module#BoglanishPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
