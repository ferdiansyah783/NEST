import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { AboutController } from './about/about.controller';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [],
  controllers: [AppController, DashboardController, AboutController, ContactController],
  providers: [AppService]
})
export class AppModule {}
