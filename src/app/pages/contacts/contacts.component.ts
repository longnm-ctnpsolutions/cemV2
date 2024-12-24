import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { contacts } from './contacts';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @ViewChild(DxDataGridComponent, {static: false}) dataGrid!: DxDataGridComponent;

  data = contacts;

  formatPhone(value: string | number){
    return String(value).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  customizePhoneCell = ({value}:any) => value ? this.formatPhone(value): undefined;

  refresh = () => {
    this.dataGrid.instance.refresh();
  }
}
