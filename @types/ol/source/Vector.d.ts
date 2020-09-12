import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Feature from '../Feature';
import { FeatureLoader, FeatureUrlFunction } from '../featureloader';
import FeatureFormat from '../format/Feature';
import Geometry from '../geom/Geometry';
import { ObjectEvent } from '../Object';
import Projection from '../proj/Projection';
import Source, { AttributionLike } from './Source';

export type LoadingStrategy = (p0: Extent, p1: number) => Extent[];
export interface Options {
    attributions?: AttributionLike;
    features?: Feature<Geometry>[] | Collection<Feature<Geometry>>;
    format?: FeatureFormat;
    loader?: FeatureLoader;
    overlaps?: boolean;
    strategy?: LoadingStrategy;
    url?: string | FeatureUrlFunction;
    useSpatialIndex?: boolean;
    wrapX?: boolean;
}
export default class VectorSource<GeomType extends Geometry = Geometry> extends Source {
    constructor(opt_options?: Options & { [key: string]: any });
    protected addFeatureInternal(feature: Feature<GeomType>): void;
    protected addFeaturesInternal(features: Feature<GeomType>[]): void;
    protected removeFeatureInternal(feature: Feature<GeomType>): void;
    addFeature(feature: Feature<GeomType>): void;
    addFeatures(features: Feature<GeomType>[]): void;
    clear(opt_fast?: boolean): void;
    forEachFeature<T>(callback: (p0: Feature<GeomType>) => T): T;
    forEachFeatureAtCoordinateDirect<T>(coordinate: Coordinate, callback: (p0: Feature<GeomType>) => T): T;
    forEachFeatureInExtent<T>(extent: Extent, callback: (p0: Feature<GeomType>) => T): T;
    forEachFeatureIntersectingExtent<T>(extent: Extent, callback: (p0: Feature<GeomType>) => T): T;
    getClosestFeatureToCoordinate(coordinate: Coordinate, opt_filter?: () => void): Feature<GeomType>;
    getExtent(opt_extent?: Extent): Extent;
    getFeatureById(id: string | number): Feature<GeomType>;
    getFeatureByUid(uid: string): Feature<GeomType>;
    getFeatures(): Feature<GeomType>[];
    getFeaturesAtCoordinate(coordinate: Coordinate): Feature<GeomType>[];
    getFeaturesCollection(): Collection<Feature<GeomType>>;
    getFeaturesInExtent(extent: Extent): Feature<GeomType>[];
    getFormat(): FeatureFormat;
    getOverlaps(): boolean;
    getResolutions(): number[];
    getUrl(): string | FeatureUrlFunction;
    hasFeature(feature: Feature<GeomType>): boolean;
    isEmpty(): boolean;
    loadFeatures(extent: Extent, resolution: number, projection: Projection): void;
    removeFeature(feature: Feature<GeomType>): void;
    removeLoadedExtent(extent: Extent): void;
    setLoader(loader: FeatureLoader): void;
    setUrl(url: string | FeatureUrlFunction): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'addfeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'addfeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'addfeature', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'changefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'changefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'changefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
    on(type: 'clear', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'clear', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'clear', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'removefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'removefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'removefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
}
export class VectorSourceEvent<GeomType extends Geometry = Geometry> extends BaseEvent {
    constructor();
    feature: Feature<GeomType>;
}
