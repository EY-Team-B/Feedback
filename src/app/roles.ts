import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Roles {
  role = ['ADMIN', 'RECRUITER', 'PANELIST', 'MANAGER'];
}
