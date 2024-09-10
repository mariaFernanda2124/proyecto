import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'lista_producto', component: ListaProductoComponent},
  { path: 'lista_usuario', component: ListaUsuarioComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }