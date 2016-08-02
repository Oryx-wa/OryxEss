import {  PipeTransform, Pipe } from '@angular/core';
import { IMciForm } from './mciform';

@Pipe({
    name: 'mciformFilter'
})
export class MciFormFilterPipe implements PipeTransform {

    transform(value: IMciForm[], filter: string): IMciForm[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((mciform: IMciForm) =>
            mciform.port.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
