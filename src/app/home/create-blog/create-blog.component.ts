import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BlogService} from '../../Services/blog.service';
import {JwtServiceService} from '../../Services/jwt-service.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  constructor(private blogService: BlogService, private jwtService: JwtServiceService) { }

  ngOnInit(): void {
  }

  userUUID:any
  token: any;
  data:any;


  //Create Blog Form
  createBlog = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    // userUUID: localStorage.getItem('token')
  });

  submitBlog() {

    this.token = localStorage.getItem('token')
    this.userUUID = this.jwtService.uuidFromToken(this.token)

    this.data = { formData: this.createBlog.value, userUUID: this.userUUID }

    this.blogService.createBlog(this.data).subscribe( // this.data
      (res: any) => {
        console.log('CREATE BLOG : ', res)
      }
    )
  }
}
