import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value) || value < 0 || value > 23) {
      return ''; // Or throw an error if preferred
    }

    // Prepend leading zero if needed
    const formattedValue = value.toString().padStart(2, '0');
    return `${formattedValue}:00:00`;
  }

}


