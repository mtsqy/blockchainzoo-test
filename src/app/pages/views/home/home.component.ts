import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  transactions: any[] = [
    {id: 1, name: 'task 1', date: 'January 22, 2921 01:15:00', amount: 'ZBC 6.0', address: 'ZBC_I7ERMQY6_6IAQXYHA_NZUE4Q46_I77DRTUX_XT3K4HGC_5X4NVZJ4_6JDOWSVD'},
    {id: 2, name: 'task 2', date: 'January 25, 2021 03:17:00', amount: 'ZBC 2.0', address: 'ZBC_I7ERMQY6_6IAQXYHA_NZUE4Q46_I77DRTUX_XT3K4HGC_5X4NVZJ4_6JDOWSVD'},
    {id: 3, name: 'task 3', date: 'February 4, 2021 05:05:00', amount: 'ZBC 2.0', address: 'ZBC_I7ERMQY6_6IAQXYHA_NZUE4Q46_I77DRTUX_XT3K4HGC_5X4NVZJ4_6JDOWSVD'},
    {id: 4, name: 'task 4', date: 'February 4, 2021 05:05:00', amount: 'ZBC -2.0', address: 'ZBC_I7ERMQY6_6IAQXYHA_NZUE4Q46_I77DRTUX_XT3K4HGC_5X4NVZJ4_6JDOWSVD'},
  ]

  constructor(
    private router: Router,
  ) { }

  addClass(event) {
    if (event.target.classList.contains('hovered')) return
    event.target.className += ' hovered';
  }

  removeClass(event) {
    event.target.className = event.target.className.replace(' hovered', '');
  }

  onSelect(task) {
    this.router.navigate(['/dashboard/task', task.id]);
  }

  ngOnInit() {
  }

}
