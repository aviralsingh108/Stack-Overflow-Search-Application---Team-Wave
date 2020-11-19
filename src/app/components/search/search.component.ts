import { ConfigService } from './../../services/config.service';
import { AfterViewInit, ViewChild, Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// export interface ApiData {
//   tags;
//   owner;
//   is_answered: boolean;
//   view_count: number;
//   answer_count: number;
//   score: number;
//   last_activity_date: string;
//   creation_date: string;
//   question_id: number;
//   content_license: string;
//   link: string;
//   title: string;
// }
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
];
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  constructor(private service: ConfigService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // ELEMENT_DATA: ApiData[] = this.service.getPosts();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
