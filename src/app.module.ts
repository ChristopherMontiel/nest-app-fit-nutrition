import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculationController } from './calculation/calculation.controller';
import { CalculationService } from './calculation/calculation.service';
import { CalculationModule } from './calculation/calculation.module';

@Module({
  imports: [CalculationModule],
  controllers: [AppController, CalculationController],
  providers: [AppService, CalculationService],
})
export class AppModule {}
