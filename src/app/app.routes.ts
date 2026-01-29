import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Directivas } from './pages/directivas/directivas';
import { Comunicacion } from './pages/comunicacion/comunicacion';
import { Formularios } from './pages/formularios/formularios';
import { Servicios } from './pages/servicios/servicios';
import { HttpClient } from './pages/http-client/http-client';
import { Databinding } from './pages/data-binding/data-binding';
import { Detalle } from './pages/detalle/detalle';
import { FormResultado } from './pages/form-resultado/form-resultado';
import { ListaCorredores } from './pages/listado-corredores/listado-corredores';

export const routes: Routes = [
    {
        path: '',
        component: Inicio
    },
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: 'data-binding',
        component: Databinding
    },
    {
        path: 'directivas',
        component: Directivas
    },
    {
        path: 'comunicacion',
        component: Comunicacion
    },
    {
        path: 'formularios',
        component: Formularios
    },
    {
        path: 'servicios',
        component: Servicios
    },
    {
        path: 'http-client',
        component: HttpClient
    },
    {
        path: 'detalle/:id',
        component: Detalle
    },
    {
        path: 'form-resultado',
        component: FormResultado
    },
    {
        path: 'listado-corredores',
        component: ListaCorredores
    }
];