import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {

  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = ['task', 'startDate', 'endDate', 'status'];
  lists: any;
  list: any;
  public arr: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.lists = localStorage.getItem('list') || '[]';
    this.list = JSON.parse(this.lists);
    this.arr = this.list.filter((x: any) => id == x.id);
    console.log(this.arr)
    this.arr.map((x: any) => {
      this.dataSource = new MatTableDataSource(x.education);
    });
  }

}
