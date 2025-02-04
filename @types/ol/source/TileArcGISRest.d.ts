import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';

export type TTileArcGISRestBaseEventTypes = 'change' | 'error';
export type TTileArcGISRestObjectEventTypes = 'propertychange';
export type TTileArcGISRestTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    crossOrigin?: null | string;
    imageSmoothing?: boolean;
    params?: Record<string, any>;
    hidpi?: boolean;
    tileGrid?: TileGrid;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    tileLoadFunction?: LoadFunction;
    url?: string;
    wrapX?: boolean;
    transition?: number;
    urls?: string[];
    zDirection?: number | NearestDirectionFunction;
}
export default class TileArcGISRest extends TileImage {
    constructor(opt_options?: Options);
    /**
     * Get the user-provided params, i.e. those passed to the constructor through
     * the "params" option, and possibly updated using the updateParams method.
     */
    getParams(): any;
    /**
     * Get the tile pixel ratio for this source.
     */
    getTilePixelRatio(pixelRatio: number): number;
    /**
     * Update the user-provided params.
     */
    updateParams(params: any): void;
    on(type: TTileArcGISRestBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileArcGISRestBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileArcGISRestBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileArcGISRestBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TTileArcGISRestBaseEventTypes | TTileArcGISRestBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TTileArcGISRestObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTileArcGISRestObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTileArcGISRestObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTileArcGISRestObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TTileArcGISRestObjectEventTypes | TTileArcGISRestObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TTileArcGISRestTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TTileArcGISRestTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TTileArcGISRestTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TTileArcGISRestTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TTileArcGISRestTileSourceEventTypes | TTileArcGISRestTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
