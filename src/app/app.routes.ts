import { Routes } from '@angular/router';
import { FormularioPersonas } from './formulario-personas/formulario-personas';
import { Personas } from './formulario-personas/personas/personas';
import { Correos } from './formulario-personas/correos/correos';
import { Dirreciones } from './formulario-personas/dirreciones/dirreciones';
import { Telefonos } from './formulario-personas/telefonos/telefonos';
import { Categorias } from './categorias/categorias';

export const routes: Routes = [
  {
    path: '',
    component: FormularioPersonas,
    children: [
      {
        path: 'personas',
        component: Personas
      },
      {
        path: 'correos',
        component: Correos
      },
      {
        path: 'telefonos',
        component: Telefonos
      },
      {
        path: 'dirreciones',
        component: Dirreciones

      }
    ]

  },
  // {
  //   path:'',
  //   component:FormularioPersonas
  // },
  // {
  //   path:'personas',
  //   component:Personas,
  //   children:[
  //     {
  //       path:'correos',
  //       component:Correos
  //     },
  //     {
  //       path:'telefonos',
  //       component:Telefonos
  //     },
  //     {
  //       path:'dirreciones',
  //       component:Dirreciones
  //     },


  //   ]
  // },

  {
    path: 'categorias',
    component: Categorias
  },
  {
    path: '**',
    redirectTo: ''
  }
];
