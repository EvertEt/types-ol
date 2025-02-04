import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import RenderEvent from '../render/Event';
import LayerRenderer from '../renderer/Layer';
import Source from '../source/Source';
import TileSource from '../source/Tile';
import BaseTileLayer, { Options } from './BaseTile';
import Layer from './Layer';

export type TTileLayerBaseEventTypes = 'change' | 'error';
export type TTileLayerObjectEventTypes =
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:preload'
    | 'change:source'
    | 'change:useInterimTilesOnError'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type TTileLayerRenderEventTypes = 'postrender' | 'prerender';
export default class TileLayer<TileSourceType extends TileSource = TileSource> extends BaseTileLayer<TileSourceType> {
    constructor(opt_options?: Options<TileSourceType>);
    /**
     * Create a renderer for this layer.
     */
    protected createRenderer(): LayerRenderer<Layer<Source>>;
    on(type: TTileLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTileLayerBaseEventTypes | TTileLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TTileLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTileLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTileLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTileLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TTileLayerObjectEventTypes | TTileLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TTileLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TTileLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TTileLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TTileLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(type: TTileLayerRenderEventTypes | TTileLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): void;
}
