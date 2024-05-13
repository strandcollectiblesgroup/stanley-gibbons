import { Query, Resolver } from '@nestjs/graphql';
import { DemoService } from './demo.service';

@Resolver()
export class DemoResolver {
  constructor(private readonly demoService: DemoService) {}
  @Query(() => String)
  hello(): string {
    return this.demoService.getHello();
  }
}
