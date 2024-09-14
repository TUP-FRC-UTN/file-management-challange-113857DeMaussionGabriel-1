import { Component, Input } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-item-archivo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-archivo.component.html',
  styleUrl: './item-archivo.component.css'
})
export class ItemArchivoComponent {

  @Input() archivo : any = null;
  @Input() hijos : any[] = [];

  obtenerNombre(nombre : string){
    let salida = "";

    salida = (nombre.length > 10 ? nombre.substring(0, 10) + "..." : nombre);

    return salida;
  }

  obtenerTooltip(nombre : string){
    let salida = "";

    salida = (nombre.length > 10 ? nombre : "");

    return salida;
  }

  obtenerIcono(tipo : FileType){
    let salida = "";

    salida = (tipo == FileType.FILE ? "bi-file-earmark" : "bi-folder");

    return salida;
  }
}
