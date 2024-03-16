import { Controller, Get, Query } from '@nestjs/common';
import { CalculationService } from './calculation.service';

@Controller('calculation')
export class CalculationController {
  constructor(private calculationService: CalculationService) {}

  @Get('bmi')
  calculateBMI(
    @Query('height') height: number,
    @Query('weight') weight: number,
  ): string {
    const bmi = this.calculationService.calculateBMI(height, weight);

    return `Tu IMC es: ${bmi.toFixed(2)}`;
  }
}
