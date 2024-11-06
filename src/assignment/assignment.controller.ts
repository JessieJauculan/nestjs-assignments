import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('assignments')
export class AssignmentController {
  
  // GET endpoint for calculating factorial
  @Get('factorial/:number')
  @ApiResponse({ status: 200, description: 'Returns the factorial of the given number.' })
  calculateFactorial(@Param('number', ParseIntPipe) number: number) {
    if (number < 0) {
      return { error: 'Factorial is not defined for negative numbers.' };
    }

    const result = this.factorial(number);
    return { factorial: result };
  }

  // Method to calculate factorial of a number
  private factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1; // 0! = 1 and 1! = 1
    }
    return n * this.factorial(n - 1); // Recursive factorial calculation
  }
}