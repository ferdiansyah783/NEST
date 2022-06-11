import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard/dashboard.controller';
import { AboutController } from './about/about.controller';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [],
  controllers: [DashboardController, AboutController, ContactController],
})
export class AppModule {}
