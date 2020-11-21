import { ConfigService } from './../../services/config.service';
import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiData } from './../../models/array';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
// ];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnInit {
  public arrayData: ApiData[]= [];
  constructor(private service: ConfigService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.service.getPosts().subscribe((data) => (this.arrayData = data));
    console.log(this.arrayData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['tags', 'owner', 'is_answered', 'view_count', 'answer_count', 'score', 'last_activity_date', 'creation_date', 'question_id', 'content_license','link', 'title'];

  dataSource = new MatTableDataSource(this.arrayData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
