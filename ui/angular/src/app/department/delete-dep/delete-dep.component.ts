import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-dep',
  templateUrl: './delete-dep.component.html',
  styleUrls: ['./delete-dep.component.css']
})

export class DeleteDepComponent implements OnInit{

  constructor(private service:SharedService){}
  DepartmentList: any = [];

  @Input() dep:any;
    DepartmentId: string = ''; // Inicialização no construtor
    DepartmentName: string = ''; // Inicialização no construtor

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;

  }

  deleteDepartment(){
    var val = {
      DepartmentId : this.DepartmentId,
      DepartmentName:this.DepartmentName
    }
    this.service.deleteDepartment(val.DepartmentId).subscribe(res => {
      alert(res.toString());
      this.refreshDepList();
    })
  }
  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
    });
  }
  
}

