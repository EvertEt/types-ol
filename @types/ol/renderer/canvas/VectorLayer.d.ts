import Feature from '../../Feature';
import { FrameState } from '../../PluggableMap';
import { Coordinate } from '../../coordinate';
import { EventsKey, ListenerFunction } from '../../events';
import BaseEvent from '../../events/Event';
import Geometry from '../../geom/Geometry';
import VectorLayer from '../../layer/Vector';
import { Pixel } from '../../pixel';
import { TransformFunction } from '../../proj';
import BuilderGroup from '../../render/canvas/BuilderGroup';
import ExecutorGroup from '../../render/canvas/ExecutorGroup';
import VectorSource from '../../source/Vector';
import Style from '../../style/Style';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';
import CanvasLayerRenderer from './Layer';
import RBush from 'rbush';

export type TCanvasVectorLayerRendererBaseEventTypes = 'change' | 'error';
export default class CanvasVectorLayerRenderer extends CanvasLayerRenderer {
    constructor(vectorLayer: VectorLayer<VectorSource<Geometry>>);
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    /**
     * Asynchronous layer level hit detection.
     */
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    /**
     * Render declutter items for this layer
     */
    renderDeclutter(frameState: FrameState): void;
    renderFeature(
        feature: Feature<Geometry>,
        squaredTolerance: number,
        styles: Style | Style[],
        builderGroup: BuilderGroup,
        opt_transform?: TransformFunction,
        opt_declutterBuilderGroup?: BuilderGroup,
    ): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    renderWorlds(executorGroup: ExecutorGroup, frameState: FrameState, opt_declutterTree?: RBush<any>): void;
    /**
     * Get a rendering container from an existing target, if compatible.
     */
    useContainer(target: HTMLElement, transform: string, opacity: number): void;
    on(type: TCanvasVectorLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCanvasVectorLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCanvasVectorLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCanvasVectorLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TCanvasVectorLayerRendererBaseEventTypes | TCanvasVectorLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
