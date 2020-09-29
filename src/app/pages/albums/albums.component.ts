import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormAlbumComponent} from "../../components/form-album/form-album.component";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getData();

  }

  getData() {
    this.albumsService.getData().subscribe(response => {
      console.log(response);
      this.albums = response;
    });
  }


  onCreat() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(FormAlbumComponent);
  }


  deleteAlbum(data) {
    this.albumsService.deleteData(data).then(
      res => {
        this.getData();
      },
      err => {
        console.log(err);
      }
    )
  }

  editAlbum(album){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(FormAlbumComponent, {
      data: {id: album.id,
        album: {name: album.name,
          band: album.band,
          label: album.label.join(', '),
          genre: album.genre.join(', '),
          producer: album.producer.join(', ')}


      }
    });
  }
}
