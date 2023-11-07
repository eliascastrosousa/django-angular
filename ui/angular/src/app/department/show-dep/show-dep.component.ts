import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DepartmentComponent } from '../department.component';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  DepartmentList: any = [];
  ModalTitle: any;
  ActivateAddEditDepComp: boolean = false;
  ActivateDeleteDepComp: boolean = false;
  dep: any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
  }

  editClick(item: any) {
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item: any) {
    this.dep = item;
    this.ModalTitle = "Deletar Item ";
    this.ActivateDeleteDepComp = true;
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;

    });
  }
}

function deleteDepartment(item: any, any: any) {
  throw new Error('Function not implemented.');
}

