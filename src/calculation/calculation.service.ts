import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculationService {
  calculateBMI(height: number, weight: number): number {
    if (height <= 0 || weight <= 0) {
      throw new Error('Height and Weight must be positive numbers');
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
  }
}
