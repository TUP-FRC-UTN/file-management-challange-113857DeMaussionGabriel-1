import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-alta-archivos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alta-archivos.component.html',
  styleUrl: './alta-archivos.component.css'
})
export class AltaArchivosComponent {
  ngOnInit(): void {
    
  }

  @Output() nuevo = new EventEmitter<any>();
  @Input() archivos : any[] = [];

  tipos = Object.values(FileType);
  duenos = OWNERS;

  lduenos : any[] = [];
  selectDueno : any = null;

  nombreNuevo : string = "";
  fechaNueva : Date = new Date();
  tipoNuevo : FileType = FileType.FILE;
  carpetaNueva : any = undefined;
  duenoNuevo : FileOwner[] = [];

  obtenerCarpetas(){
    return this.archivos.filter(i => i.dato.type == FileType.FOLDER);
  }

  agregarDueno(dueno : any){
    console.log(dueno);
    this.lduenos.push(dueno);
    this.duenos.splice(this.duenos.indexOf(dueno),1);
    this.selectDueno = null;
  }

  nuevoDoc(datos : any){
     let doc: FileItem = {
      id: this.generarId(),
      name: datos.nombre,
      creation: datos.fecha,
      type: datos.selectTipo as FileType,
      owners: this.lduenos
    };

    return doc;
  }

  generarId(){
    return Math.random().toString(36).substr(2, 9);
  }

  crear(form : any){
    let output : any = this.nuevoDoc(form.value)
    console.log(output);
    this.nuevo.emit(output);
    console.log("enviado")
  }

  limpiar(form : any){
    form.reset();
  }


}
