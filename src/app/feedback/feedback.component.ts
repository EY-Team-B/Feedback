import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { Panel } from '../panel';
import { PanelService } from '../panel.service';
import { Status } from '../status';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  panel: Panel = new Panel();
  constructor(private service: PanelService, private router:Router,private dataService: DataTransferService, public status: Status){}
  ngOnInit(): void {

  }

  
  onSubmit() {
    if (window.confirm('Continue?')) {
      this.service.save(this.status).subscribe((data) => {
        window.alert(data);
        this.router.navigateByUrl('/view');
      });
    }
  }

  cancel() {
    this.status = new Status();
    this.router.navigate(['/view']);
  }
}
