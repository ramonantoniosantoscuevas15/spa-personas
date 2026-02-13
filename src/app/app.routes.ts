import { Routes } from '@angular/router';
import { FormularioPersonas } from './formulario-personas/formulario-personas';
import { Personas } from './formulario-personas/personas/personas';
import { Correos } from './formulario-personas/correos/correos';
import { Dirreciones } from './formulario-personas/dirreciones/dirreciones';
import { Telefonos } from './formulario-personas/telefonos/telefonos';
import { Categorias } from './categorias/categorias';
import { FormularioCategorias } from './categorias/formulario-categorias/formulario-categorias';
import { EditarCategorias } from './categorias/editar-categorias/editar-categorias';
import { IndiceCategoria } from './categorias/indice-categoria/indice-categoria';
import { ListadoPersonas } from './formulario-personas/listado-personas/listado-personas';
import { EditarPersonas } from './formulario-personas/editar-personas/editar-personas';

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
    path:'categorias/formulario',
    component:FormularioCategorias
  },
  {
    path:'categorias/editar/:id',
    component: EditarCategorias
  },
  {
    path:'indice-categoria',
    component:IndiceCategoria

  },
  {
    path:'listado-personas',
    component:ListadoPersonas
  },
  {
    path:'editar-personas/:id',
    component:EditarPersonas
  },
  {
    path: '**',
    redirectTo: ''
  }
];
