import {  PipeTransform, Pipe } from '@angular/core';
import { IAgent } from './agent';

@Pipe({
    name: 'agentFilter'
})
export class AgentFilterPipe implements PipeTransform {

    transform(value: IAgent[], filter: string): IAgent[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((agent: IAgent) =>
            agent.Name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
