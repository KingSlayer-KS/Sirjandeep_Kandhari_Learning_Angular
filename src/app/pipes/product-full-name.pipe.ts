import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ProductFullNamePipe',
  standalone: true,
})
export class ProductFullNamePipe implements PipeTransform {
  transform(contentItem: { company?: string; name: string }): string {
    console.log('Custom Pipe');
    const companyName = contentItem.company || ' ';
    return `${companyName} ${contentItem.name}`;
  }
}
