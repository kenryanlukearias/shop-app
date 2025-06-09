import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Prerender only static routes
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  // Use SSR for parameterized routes
  {
    path: 'edit/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'details/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'create',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'customers',
    renderMode: RenderMode.Prerender
  },
  // Fallback
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];