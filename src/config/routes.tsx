import { lazy, LazyExoticComponent } from 'react';

export interface Route {
  path: string;
  title?: string;
  subtitle?: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

export const routes: Route[] = [
  {
    path: 'message/*',
    title: 'Mensajes',
    subtitle: 'Consulte y envie Whatsapps a sus contactos',
    component: lazy(() => import('@views/MessageScreen')),
  },
  {
    path: 'contact/*',
    title: 'Contactos',
    subtitle: 'Gestione sus contactos',
    component: lazy(() => import('@views/ContactScreen')),
  },
  {
    path: 'template/*',
    title: 'Plantillas',
    subtitle: 'Consulte y configure plantillas y categorias',
    component: lazy(() => import('@views/TemplateScreen')),
  },
  {
    path: 'profile/*',
    title: 'Perfil',
    subtitle: 'Revise y guarde sus datos',
    component: lazy(() => import('@views/ProfileScreen')),
  },
];
