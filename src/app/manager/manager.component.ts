import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};

  constructor() { }

  ngOnInit(): void {
    
  }

}
