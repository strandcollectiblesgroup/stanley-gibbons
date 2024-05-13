import { Module } from '@nestjs/common';
import { DemoResolver } from './demo.resolver';
import { DemoService } from './demo.service';

@Module({
  providers: [DemoService, DemoResolver],
  imports: [],
})
export class DemoModule {}
