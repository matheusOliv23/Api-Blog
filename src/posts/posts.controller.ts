import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {  }

  @Get()
 async getAll() : Promise<Posts[]>{
    return this.postsService.getAll()
  }
  
  @Get(':id')
 async getById(@Param('id') id: number) : Promise<Posts>{
    return this.postsService.getById(id)
  }

  @Post()
  async create(@Body() post: Posts): Promise<Posts>{
    return this.postsService.create(post)
  } 
  
  @Put(':id')
  async update(@Param('id') id: number, @Body() post: Posts): Promise<Posts>{
    post.id = id
    return this.postsService.update(post)
  }

  @Delete(':id')
  async delete(@Param('id') id: number){
    this.postsService.delete(id)
  }
}
