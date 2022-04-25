import { Status } from './status';

export class Report {
  clg_id: string = '';
  name: string = '';
  email: string = '';
  interviewDate: Date = new Date();
  status: Status = new Status();
  feedback: String = '';
}
