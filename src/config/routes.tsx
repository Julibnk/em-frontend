import { lazy, LazyExoticComponent } from 'react';
import i18n from 'i18next';

export interface Route {
  path: string;
  title?: string;
  subtitle?: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

export const routes: Route[] = [
  {
    path: 'message/*',
    title: i18n.t('message', { count: 0 }),
    subtitle: i18n.t('message_subtitle'),
    component: lazy(() => import('@views/MessageScreen')),
  },
  {
    path: 'contact/*',
    title: i18n.t('contact', { count: 0 }),
    subtitle: i18n.t('contact_subtitle'),

    component: lazy(() => import('@views/ContactScreen')),
  },
  {
    path: 'configuration/*',
    title: i18n.t('configuration', { count: 0 }),
    subtitle: i18n.t('configuration_subtitle'),
    component: lazy(() => import('@views/ConfigurationScreen')),
  },
  {
    path: 'profile/*',
    title: i18n.t('profile'),
    subtitle: i18n.t('profile_subtitle'),
    component: lazy(() => import('@views/ProfileScreen')),
  },
];
