import { lazy, LazyExoticComponent } from 'react';

export interface Route {
  index?: boolean;
  path?: string;
  title: string;
  subtitle?: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

export const routes: Route[] = [
  {
    index: true,
    title: 'Mensajes',
    subtitle: 'Mensajeeeees',
    component: lazy(() => import('@views/MessageScreen')),
  },
  {
    // index: false,
    path: 'contact/*',
    title: 'Contactos',
    subtitle: 'asda',
    component: lazy(() => import('@views/ContactScreen')),
  },
  {
    // index: false,
    path: 'template/*',
    title: 'Plantilla',
    subtitle: 'asda',
    component: lazy(() => import('@views/TemplateScreen')),
  },

  {
    // index: false,
    path: 'profile/*',
    title: 'Perfil',
    subtitle: 'asda',
    component: lazy(() => import('@views/ProfileScreen')),
  },

  {
    // index: false,
    path: '*',
    title: 'No encontrado',
    component: lazy(() => import('@views/NotFoundScreen')),
  },
];
