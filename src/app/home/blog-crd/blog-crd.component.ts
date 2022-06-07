import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service'
import { ComponentService } from '../../Services/component.service'
import  {Router} from '@angular/router';

@Component({
  selector: 'app-blog-crd',
  templateUrl: './blog-crd.component.html',
  styleUrls: ['./blog-crd.component.scss']
})
export class BlogCrdComponent implements OnInit {

  constructor(private getBlogServce: BlogService, 
    private componentService: ComponentService,
    private router: Router
    ) { }

  allBlogs: any;

  ngOnInit(): void {
    this.getBlogServce.getBlogs().subscribe(
      (res:any) => {
        this.allBlogs = res.allBlogs
      }
    )
  };

  expand(value: any) {
    this.componentService.siblingMsg.next(value)
    this.router.navigateByUrl('/home/exp')
  }

}
