import { Controller, Get } from '@tsed/common';
import { PostRepository } from './../repository/PostRepository';

@Controller('/post')
export class HelloWorldController {
  constructor(private postRepository: PostRepository) {}
  @Get('/')
  async get() {
    return await this.postRepository.find();
  }
}
