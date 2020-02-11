import { Component } from '@angular/core';
import {Employe} from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

employee:Employe[]=[new Employe(1,'scottt',2222),
new Employe(2,'adam',2221), new Employe(3,'sai', 1433)];

nemployees:Employe=new Employe(null, null,null);

onInsertClick(){
this.employee.push(new Employe(nemployees.empid, nemployees.empName, nemployees.salary));
this.nemployees.empId=null;
this.nemployees.empName=null;
this.nemployees.salary=null;



}

onDeleteClick(n){

this.employee.splice(n,1);

}


}
