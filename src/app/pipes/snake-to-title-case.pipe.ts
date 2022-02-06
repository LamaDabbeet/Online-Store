import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeToTitle',
})
export class SnakeToTitleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace('-', '_')
      .split('_')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
