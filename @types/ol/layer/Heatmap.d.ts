import Feature from '../Feature';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Geometry from '../geom/Geometry';
import RenderEvent from '../render/Event';
import WebGLPointsLayerRenderer from '../renderer/webgl/PointsLayer';
import VectorSource from '../source/Vector';
import VectorLayer from './Vector';

export type THeatmapBaseEventTypes = 'change' | 'error';
export type THeatmapObjectEventTypes =
    | 'change:blur'
    | 'change:extent'
    | 'change:gradient'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:radius'
    | 'change:source'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type THeatmapRenderEventTypes = 'postcompose' | 'postrender' | 'precompose' | 'prerender' | 'rendercomplete';
export interface Options {
    className?: string;
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    minZoom?: number;
    maxZoom?: number;
    gradient?: string[];
    radius?: number;
    blur?: number;
    weight?: string | ((p0: Feature<Geometry>) => number);
    source?: VectorSource<Geometry>;
    properties?: Record<string, any>;
}
export default class Heatmap extends VectorLayer<VectorSource> {
    constructor(opt_options?: Options);
    /**
     * Create a renderer for this layer.
     */
    createRenderer(): WebGLPointsLayerRenderer;
    /**
     * Return the blur size in pixels.
     */
    getBlur(): number;
    /**
     * Return the gradient colors as array of strings.
     */
    getGradient(): string[];
    /**
     * Return the size of the radius in pixels.
     */
    getRadius(): number;
    /**
     * Set the blur size in pixels.
     */
    setBlur(blur: number): void;
    /**
     * Set the gradient colors as array of strings.
     */
    setGradient(colors: string[]): void;
    /**
     * Set the size of the radius in pixels.
     */
    setRadius(radius: number): void;
    on(type: THeatmapBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: THeatmapBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: THeatmapBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: THeatmapBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: THeatmapBaseEventTypes | THeatmapBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: THeatmapObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: THeatmapObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: THeatmapObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: THeatmapObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: THeatmapObjectEventTypes | THeatmapObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: THeatmapRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: THeatmapRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: THeatmapRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: THeatmapRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(type: THeatmapRenderEventTypes | THeatmapRenderEventTypes[], listener: ListenerFunction<RenderEvent>): void;
}
