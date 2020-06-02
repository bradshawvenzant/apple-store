import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from '../shared/animations/animations';
import { IOdometerConfiguration, OdometerConfiguration } from '../shared/model/odometer-configuration';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    animations
  ]
})
export class WelcomeComponent implements OnInit {
  year: number;
  odometerConfig: IOdometerConfiguration;

  constructor(private router: Router) { }

  ngOnInit() {
    const todayDate = new Date();
    this.year = Number(todayDate.getFullYear());
    this.odometerConfig = new OdometerConfiguration(1980, 'd', 'slide');
  }

  goToHome(): void {
    this.router.navigate(['/home'])
  }
}
