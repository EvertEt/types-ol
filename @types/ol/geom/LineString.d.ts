import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import SimpleGeometry from './SimpleGeometry';

export type TLineStringBaseEventTypes = 'change' | 'error';
export type TLineStringObjectEventTypes = 'propertychange';
export default class LineString extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    protected getSimplifiedGeometryInternal(squaredTolerance: number): LineString;
    /**
     * Append the passed coordinate to the coordinates of the linestring.
     */
    appendCoordinate(coordinate: Coordinate): void;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): LineString;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    /**
     * Iterate over each segment, calling the provided callback.
     * If the callback returns a truthy value the function returns that
     * value immediately. Otherwise the function returns false.
     */
    forEachSegment<T, S>(callback: (this: S, p0: Coordinate, p1: Coordinate) => T): T | boolean;
    /**
     * Return the coordinate at the provided fraction along the linestring.
     * The fraction is a number between 0 and 1, where 0 is the start of the
     * linestring and 1 is the end.
     */
    getCoordinateAt(fraction: number, opt_dest?: Coordinate): Coordinate;
    /**
     * Returns the coordinate at m using linear interpolation, or null if no
     * such coordinate exists.
     * opt_extrapolate controls extrapolation beyond the range of Ms in the
     * MultiLineString. If opt_extrapolate is true then Ms less than the first
     * M will return the first coordinate and Ms greater than the last M will
     * return the last coordinate.
     */
    getCoordinateAtM(m: number, opt_extrapolate?: boolean): Coordinate;
    /**
     * Return the coordinates of the linestring.
     */
    getCoordinates(): Coordinate[];
    getFlatMidpoint(): number[];
    /**
     * Return the length of the linestring on projected plane.
     */
    getLength(): number;
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Set the coordinates of the linestring.
     */
    setCoordinates(coordinates: Coordinate[], opt_layout?: GeometryLayout): void;
    on(type: TLineStringBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TLineStringBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TLineStringBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TLineStringBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TLineStringBaseEventTypes | TLineStringBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TLineStringObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TLineStringObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TLineStringObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TLineStringObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TLineStringObjectEventTypes | TLineStringObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
