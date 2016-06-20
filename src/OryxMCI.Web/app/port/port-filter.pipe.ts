import {  PipeTransform, Pipe } from '@angular/core';
import { IPort } from './port';

@Pipe({
    name: 'portFilter'
})
export class PortFilterPipe implements PipeTransform {

    transform(value: IPort[], filter: string): IPort[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((port: IPort) =>
            port.Name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
