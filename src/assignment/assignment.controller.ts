import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('assignments')
export class AssignmentController {
  
  // GET endpoint for Fibonacci sequence
  @Get('fibonacci/:n')
  @ApiResponse({ status: 200, description: 'Returns the first n numbers in the Fibonacci sequence.' })
  getFibonacciSequence(@Param('n', ParseIntPipe) n: number) {
    // Validate input
    if (n <= 0) {
      return { sequence: [] };
    }

    // Generate Fibonacci sequence
    const fibonacciSequence = this.calculateFibonacci(n);
    return { sequence: fibonacciSequence };
  }

  // Method to calculate Fibonacci sequence up to n terms
  private calculateFibonacci(n: number): number[] {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, n); // Return only first n terms
  }
}