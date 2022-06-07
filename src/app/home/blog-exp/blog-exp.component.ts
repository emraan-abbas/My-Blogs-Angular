import { Component, OnInit } from '@angular/core';
import { BlogService }  from '../../Services/blog.service';
import { JwtServiceService }  from '../../Services/jwt-service.service';
import { ComponentService }  from '../../Services/component.service';
import  {Router} from '@angular/router';


@Component({
  selector: 'app-blog-exp',
  templateUrl: './blog-exp.component.html',
  styleUrls: ['./blog-exp.component.scss']
})
export class BlogExpComponent implements OnInit {
  blog: any;
  token: any;
  uuid: any;

  constructor(private blogService: BlogService, private jwtServie: JwtServiceService,
    private componentService: ComponentService, private router: Router) { }


    ngOnInit(): void {
      this.componentService.siblingMsg.subscribe(
        (value: any) => {
          this.blog = value
      }
      )
    };


  editBlog() {};

  deleteBlog() {
    console.log('BLOG ==== ', this.blog)
    this.blogService.deleteBlog(this.blog.uuid).subscribe(
      (res: any) => {
        console.log('Responce form Delete BLOG : ', res)
      }
    )

  };
  
  closeTab() {
    this.router.navigateByUrl('/home/crd')
  }
}
