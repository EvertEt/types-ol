import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Circle from './Circle';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import LinearRing from './LinearRing';
import Point from './Point';
import SimpleGeometry from './SimpleGeometry';

export type TPolygonBaseEventTypes = 'change' | 'error';
export type TPolygonObjectEventTypes = 'propertychange';
export default class Polygon extends SimpleGeometry {
    constructor(coordinates: Coordinate[][] | number[], opt_layout?: GeometryLayout, opt_ends?: number[]);
    protected getSimplifiedGeometryInternal(squaredTolerance: number): Polygon;
    /**
     * Append the passed linear ring to this polygon.
     */
    appendLinearRing(linearRing: LinearRing): void;
    /**
     * Make a complete copy of the geometry.
     */
    clone(): Polygon;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    containsXY(x: number, y: number): boolean;
    /**
     * Return the area of the polygon on projected plane.
     */
    getArea(): number;
    /**
     * Get the coordinate array for this geometry.  This array has the structure
     * of a GeoJSON coordinate array for polygons.
     */
    getCoordinates(opt_right?: boolean): Coordinate[][];
    getEnds(): number[];
    getFlatInteriorPoint(): number[];
    /**
     * Return an interior point of the polygon.
     */
    getInteriorPoint(): Point;
    /**
     * Return the Nth linear ring of the polygon geometry. Return null if the
     * given index is out of range.
     * The exterior linear ring is available at index 0 and the interior rings
     * at index 1 and beyond.
     */
    getLinearRing(index: number): LinearRing;
    /**
     * Return the number of rings of the polygon,  this includes the exterior
     * ring and any interior rings.
     */
    getLinearRingCount(): number;
    /**
     * Return the linear rings of the polygon.
     */
    getLinearRings(): LinearRing[];
    getOrientedFlatCoordinates(): number[];
    /**
     * Get the type of this geometry.
     */
    getType(): GeometryType;
    /**
     * Test if the geometry and the passed extent intersect.
     */
    intersectsExtent(extent: Extent): boolean;
    /**
     * Set the coordinates of the polygon.
     */
    setCoordinates(coordinates: Coordinate[][], opt_layout?: GeometryLayout): void;
    on(type: TPolygonBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TPolygonBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TPolygonBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TPolygonBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TPolygonBaseEventTypes | TPolygonBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TPolygonObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TPolygonObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TPolygonObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TPolygonObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TPolygonObjectEventTypes | TPolygonObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
/**
 * Create an approximation of a circle on the surface of a sphere.
 */
export function circular(center: Coordinate, radius: number, opt_n?: number, opt_sphereRadius?: number): Polygon;
/**
 * Create a regular polygon from a circle.
 */
export function fromCircle(circle: Circle, opt_sides?: number, opt_angle?: number): Polygon;
/**
 * Create a polygon from an extent. The layout used is XY.
 */
export function fromExtent(extent: Extent): Polygon;
/**
 * Modify the coordinates of a polygon to make it a regular polygon.
 */
export function makeRegular(polygon: Polygon, center: Coordinate, radius: number, opt_angle?: number): void;
