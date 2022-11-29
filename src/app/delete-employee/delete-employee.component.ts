import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  Id =""

  readValue = () =>
  {
    let data:any = {"Id":this.Id}
  }

}
