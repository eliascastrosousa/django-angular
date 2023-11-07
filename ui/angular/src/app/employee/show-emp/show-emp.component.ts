import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { EmployeeComponent } from '../employee.component';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  
  constructor(private service:SharedService){}

  EmployeeList: any = [];
  ModalTitle:any;
  ActivateAddEditEmpComp:boolean=false;
  ActivateDeleteEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClickEmp(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department: ""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp = true;
  }

  editClickEmp(item: any) {
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    this.emp = item;
    this.ModalTitle = "Deletar Item ";
    this.ActivateDeleteEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;

    });
  }
}
