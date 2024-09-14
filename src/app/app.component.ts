import { Component, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { ListadoArchivosComponent } from "./listado-archivos/listado-archivos.component";
import { AltaArchivosComponent } from "./alta-archivos/alta-archivos.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoArchivosComponent, AltaArchivosComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  @ViewChild(ListadoArchivosComponent) childComponent!: ListadoArchivosComponent;

  remove(){
    this.childComponent.removeChecked();
  }

  agregar(item : any){
    this.files.push(item);
    console.log(this.files);
  }
}
