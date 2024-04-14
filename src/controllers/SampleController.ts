import { JsonController, Get, Body, Post } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@JsonController('/sample')
export class SampleController {
  @Get('/')
  getSampleData() {
    return { message: 'Hello, testing is enabled! hihi' };
  }
  
  @Post('/sample')
  post(@Body() user: any) {
    console.log(user);
    
    return user;
  }
}