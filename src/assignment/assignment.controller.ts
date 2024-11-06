import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('assignments')
export class AssignmentController {
  
  // GET endpoint for checking if a number is prime
  @Get('prime/:number')
  @ApiResponse({ status: 200, description: 'Returns whether the number is prime or not.' })
  isPrime(@Param('number', ParseIntPipe) number: number) {
    const result = this.checkPrime(number);
    return { isPrime: result };
  }

  // Method to check if a number is prime
  private checkPrime(number: number): boolean {
    if (number <= 1) return false;  // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false; // Found a divisor, so it's not prime
    }
    return true; // No divisors found, number is prime
  }
}