import { Roles } from "./roles";

export class User {
  email: string = '';
  emp_id: string = '';
  name: string = '';
  mobileNumber: number = 0;
  dept: string = '';
  role: Roles = new Roles();
}
