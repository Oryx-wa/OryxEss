import {  PipeTransform, Pipe } from '@angular/core';
import { IInspector } from './inspector';

@Pipe({
    name: 'inspectorFilter'
})
export class InspectorFilterPipe implements PipeTransform {

    transform(value: IInspector[], filter: string): IInspector[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((inspector: IInspector) =>
            inspector.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
