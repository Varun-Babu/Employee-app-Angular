import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
name=""
id=""
designation=""
email=""

readValue = () =>
{
  let data:any = {"name":this.name,"id":this.id,"designation":this.designation,"email":this.email}
  console.log(data)
}

}
