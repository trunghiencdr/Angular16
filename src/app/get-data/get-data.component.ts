import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent {

  constructor(private httpServerService: HttpServerService) {

  }

  public ngOnInit(){
    this.httpServerService.getComments().subscribe(
      data => {
        console.log('data get:', data)
      }
    )

    this.httpServerService.getRamdomUser(3).subscribe(
      data => {
        console.log('random user:', data.results)
      }
    )

    this.httpServerService.postComments({body: 'some body new', postId: '3'}).subscribe(
      data => {
        console.log('post success:', data)
      }
    )
  }
}
