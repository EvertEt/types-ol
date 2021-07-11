import MapBrowserEvent from 'ol/MapBrowserEvent';
import { ObjectEvent } from 'ol/Object';
import { EventsKey } from 'ol/events';
import BaseEvent from 'ol/events/Event';
import { Condition } from 'ol/events/condition';
import Interaction from 'ol/interaction/Interaction';

export interface Options {
    condition?: Condition;
    duration?: number;
    pixelDelta?: number;
}
export default class KeyboardPan extends Interaction {
    constructor(opt_options?: Options & { [key: string]: any });
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} if it was a
     * KeyEvent, and decides the direction to pan to (if an arrow key was
     * pressed).
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
