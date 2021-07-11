import { ObjectEvent } from 'ol/Object';
import Control from 'ol/control/Control';
import { EventsKey } from 'ol/events';
import BaseEvent from 'ol/events/Event';
import { Extent } from 'ol/extent';

export interface Options {
    className?: string;
    target?: HTMLElement | string;
    label?: string | HTMLElement;
    tipLabel?: string;
    extent?: Extent;
}
export default class ZoomToExtent extends Control {
    constructor(opt_options?: Options & { [key: string]: any });
    protected extent: Extent;
    protected handleZoomToExtent(): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
