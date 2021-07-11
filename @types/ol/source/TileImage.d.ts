import ImageTile from 'ol/ImageTile';
import { ObjectEvent } from 'ol/Object';
import { LoadFunction } from 'ol/Tile';
import { UrlFunction } from 'ol/Tile';
import Tile from 'ol/Tile';
import TileCache from 'ol/TileCache';
import { EventsKey } from 'ol/events';
import BaseEvent from 'ol/events/Event';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import { AttributionLike } from 'ol/source/Source';
import State from 'ol/source/State';
import { TileSourceEvent } from 'ol/source/Tile';
import UrlTile from 'ol/source/UrlTile';
import TileGrid from 'ol/tilegrid/TileGrid';

export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    crossOrigin?: null | string;
    imageSmoothing?: boolean;
    opaque?: boolean;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    state?: State;
    tileClass?: typeof ImageTile;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tilePixelRatio?: number;
    tileUrlFunction?: UrlFunction;
    url?: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
    key?: string;
    zDirection?: number;
}
export default class TileImage extends UrlTile {
    constructor(options: Options);
    protected crossOrigin: string;
    protected tileCacheForProjection: { [key: string]: TileCache };
    protected tileClass: typeof ImageTile;
    protected tileGridForProjection: { [key: string]: TileGrid };
    /**
     * Return the key to be used for all tiles in the source.
     */
    protected getKey(): string;
    protected getTileInternal(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    canExpireCache(): boolean;
    expireCache(projection: Projection, usedTiles: { [key: string]: boolean }): void;
    getContextOptions(): object | undefined;
    getGutter(): number;
    getGutterForProjection(projection: Projection): number;
    getOpaque(projection: Projection): boolean;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    getTileCacheForProjection(projection: Projection): TileCache;
    getTileGridForProjection(projection: Projection): TileGrid;
    /**
     * Sets whether to render reprojection edges or not (usually for debugging).
     */
    setRenderReprojectionEdges(render: boolean): void;
    /**
     * Sets the tile grid to use when reprojecting the tiles to the given
     * projection instead of the default tile grid for the projection.
     * This can be useful when the default tile grid cannot be created
     * (e.g. projection has no extent defined) or
     * for optimization reasons (custom tile size, resolutions, ...).
     */
    setTileGridForProjection(projection: ProjectionLike, tilegrid: TileGrid): void;
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
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): void;
}
