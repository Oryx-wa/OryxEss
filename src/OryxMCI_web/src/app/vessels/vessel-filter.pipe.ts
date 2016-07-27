import {  PipeTransform, Pipe } from '@angular/core';
import { IVessel } from './vessel';

@Pipe({
    name: 'vesselFilter'
})
export class VesselFilterPipe implements PipeTransform {

    transform(value: IVessel[], filter: string): IVessel[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((vessel: IVessel) =>
            vessel.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
