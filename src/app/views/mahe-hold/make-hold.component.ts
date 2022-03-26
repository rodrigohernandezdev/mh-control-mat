import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as XLSX from 'xlsx';
import {MakeHold} from "../../models/MakeHold";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-make-hold',
  templateUrl: './make-hold.component.html',
  styleUrls: ['./make-hold.component.scss']
})
export class MakeHoldComponent implements OnInit,AfterViewInit {
  displayedColumnsMake: string[] = ['po', 'item', 'shipTo', 'quantity', 'needByDate', 'received'];
  makeHolds: MakeHold[] = [];
  dataSourceMake: MatTableDataSource<MakeHold>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _snackBar: MatSnackBar) {
    this.dataSourceMake = new MatTableDataSource(this.makeHolds);
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSourceMake.paginator = this.paginator;
    this.dataSourceMake.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMake.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceMake.paginator) {
      this.dataSourceMake.paginator.firstPage();
    }
  }

  fileUpload(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (e) => {
      if (e.target != null) {
        let binaryData = e.target.result;
        let workBook = XLSX.read(binaryData, {type: "binary", cellDates:true, cellNF: false, cellText:false});
        console.log(XLSX.utils.sheet_to_json(workBook.Sheets['DATA'], {dateNF:"MM-dd-yyyy"}));
        this.makeHolds = XLSX.utils.sheet_to_json(workBook.Sheets['DATA'], {dateNF:"MM-dd-yyyy"});
        this.dataSourceMake.data = this.makeHolds;
        if (this.makeHolds.length > 0) {
          this.showSnackBar('Data uploaded successfully', 'OK');
        } else {
          this.showSnackBar('Please upload a correct file', 'OK');
        }

      }
    }
  }
  showSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

}
