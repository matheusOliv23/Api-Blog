import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts } from './entities/post.entity';

@Injectable()
export class PostsService {
  posts: Posts[] = [
    {id: 1, titulo: 'teste', descricao: 'teste', autor: 'matheus', texto: 'teste'},
    {id: 2, titulo: 'teste', descricao: 'teste', autor: 'matheus', texto: 'teste'},
    {id: 3, titulo: 'teste', descricao: 'teste', autor: 'matheus', texto: 'teste'}
   
  ]
  
  getAll(){
      return this.posts
  }

  getById(id: number){
    const post = this.posts.find( (value) => value.id == id)
    return post
  }

  create(post: Posts){
    let lastId = 0;
    if (this.posts.length > 0){
      lastId = this.posts[this.posts.length - 1].id
    } 

    post.id = lastId + 1
    this.posts.push(post)

    return post
  }

  update(post: Posts){
    const postArray = this.getById(post.id)
    if (postArray){
      postArray.titulo = post.titulo
      postArray.descricao = post.descricao
      postArray.autor = post.autor
      postArray.texto = post.texto
    }

    return postArray
  }

  delete(id: number){
      const index = this.posts.findIndex((value) => value.id == id)
      this.posts.splice(index,1)
  }
  
}
