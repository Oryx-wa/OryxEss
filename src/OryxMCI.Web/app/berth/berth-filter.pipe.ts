import {  PipeTransform, Pipe } from '@angular/core';
import { IBerth } from './berth';

@Pipe({
    name: 'berthFilter'
})
export class BerthFilterPipe implements PipeTransform {

    transform(value: IBerth[], filter: string): IBerth[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((berth: IBerth) =>
            berth.Name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
