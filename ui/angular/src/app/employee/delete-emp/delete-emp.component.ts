import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit{

  constructor(private service:SharedService){}
  EmployeeList: any = [];


  @Input() emp:any;
    EmployeeId: string = '';
    EmployeeName: string = '';
    Department: string = '';

  ngOnInit(): void {
    this.EmployeeId=this.emp.EmployeeId;
    this.EmployeeName=this.emp.EmployeeName;
    this.Department=this.emp.Department;
  }

  deleteEmployee(){
    var val = {
      EmployeeId : this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department
    }

    this.service.deleteEmployee(val.EmployeeId).subscribe(res => {
      alert(res.toString());
      this.refreshDepList();
    })
  }
  refreshDepList() {
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data;
    });
  }

}
