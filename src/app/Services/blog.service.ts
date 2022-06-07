import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlogs() {
    return this.http.get('http://localhost:3000/myblog/blog/all');
  }

  getMyBlogs() {
    return this.http.get('http://localhost:3000/myblog/blog/myall');
  }

  createBlog(blogs: any) {
    return this.http.post('http://localhost:3000/myblog/blog/create', blogs);
  }

  getBlogs() {
    return this.http.get('http://localhost:3000/myblog/blog/all');
  }

  updateBlog(blog: any) {
    return this.http.put('http://localhost:3000/myblog/blog/edit/:id', blog);
  }

  deleteBlog(id: any) {
    return this.http.delete('http://localhost:3000/myblog/blog/delete/'+id);
  }
}
