import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileType } from '../../models/file.item.model';
import { FormsModule } from '@angular/forms';
import { ItemArchivoComponent } from "../item-archivo/item-archivo.component";

@Component({
  selector: 'app-listado-archivos',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemArchivoComponent],
  templateUrl: './listado-archivos.component.html',
  styleUrl: './listado-archivos.component.css'
})

export class ListadoArchivosComponent implements OnInit{
  ngOnInit(): void {
    this.files.forEach(file => {
      this.listadoArchivos.push({data: file, checked: false})
    })
    this.sortList();
    this.updateList();

  }

  @Input() files : any[] = [];
  listadoArchivos : any[] = [];
  listadoMuestra : any[] = [];


  removeChecked(){

    if((this.listadoArchivos.filter(item => item.checked).length > 1) && !confirm("¿Esta seguro que desea eliminar los archivos?")){
      return;
    }

    this.listadoArchivos = this.listadoArchivos.filter(item => !item.checked)
    this.updateList();
  }

  sortList(){
    this.listadoArchivos.sort((a, b) => {
      let resultadoTipo = a.data.type - b.data.type;

      if(resultadoTipo !== 0){
        return resultadoTipo
      }

      let resultadoNombre = a.data.name.localeCompare(b.data.name);

      return resultadoNombre
    })
  }

  updateList(){
    this.listadoMuestra = this.listadoArchivos.filter(i => typeof i.data.parentId === 'undefined')
  }

  getChilds(file : any){
    let childList : any[] = [];
    childList = this.listadoArchivos.filter(i => i.data.parentId == file.data.id)

    return childList;
  }


}
