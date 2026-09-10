
import { Component } from '@angular/core';
import { GridModule, PageService, SelectionService, ColumnModel } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule],
  providers: [PageService, SelectionService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public data = data;
  public selectionOptions = {
    type: 'Multiple',
    checkboxMode: 'ResetOnRowClick',
    persistSelection: true
  };
  public isRowSelectable(data: any, columns: ColumnModel[]){
    return data.CustomerID !=='TOMSP';
  };
  

  public pageSettings = {
    pageSize: 7
  };

}

