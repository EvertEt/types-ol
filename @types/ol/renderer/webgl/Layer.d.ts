import { FrameState } from '../../PluggableMap';
import { Coordinate } from '../../coordinate';
import { EventsKey, ListenerFunction } from '../../events';
import BaseEvent from '../../events/Event';
import Layer from '../../layer/Layer';
import { Pixel } from '../../pixel';
import WebGLHelper, { UniformValue } from '../../webgl/Helper';
import LayerRenderer from '../Layer';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';

export type TWebGLLayerRendererBaseEventTypes = 'change' | 'error';
/**
 * An object holding positions both in an index and a vertex buffer.
 */
export interface BufferPositions {
    vertexPosition: number;
    indexPosition: number;
}
export interface Options {
    className?: string;
    uniforms?: Record<string, UniformValue>;
    postProcesses?: PostProcessesOptions[];
}
export interface PostProcessesOptions {
    scaleRatio?: number;
    vertexShader?: string;
    fragmentShader?: string;
    uniforms?: Record<string, UniformValue>;
}
/**
 * This message will trigger the generation of a vertex and an index buffer based on the given render instructions.
 * When the buffers are generated, the worked will send a message of the same type to the main thread, with
 * the generated buffers in it.
 * Note that any addition properties present in the message will be sent back to the main thread.
 */
export interface WebGLWorkerGenerateBuffersMessage {
    type: WebGLWorkerMessageType;
    renderInstructions: ArrayBuffer;
    vertexBuffer?: ArrayBuffer;
    indexBuffer?: ArrayBuffer;
    customAttributesCount?: number;
}
export enum WebGLWorkerMessageType {
    GENERATE_BUFFERS = 'GENERATE_BUFFERS',
}
export default class WebGLLayerRenderer<LayerType extends Layer = Layer> extends LayerRenderer {
    constructor(layer: LayerType, opt_options?: Options);
    protected helper: WebGLHelper;
    protected postRender(frameState: FrameState): void;
    protected preRender(frameState: FrameState): void;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    getDataAtPixel(pixel: Pixel, frameState: FrameState, hitTolerance: number): Uint8ClampedArray | Uint8Array;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    on(type: TWebGLLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TWebGLLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TWebGLLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TWebGLLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TWebGLLayerRendererBaseEventTypes | TWebGLLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
/**
 * Reads an id from a color-encoded array
 * Note: the expected range for each component is 0 to 1 with 256 steps.
 */
export function colorDecodeId(color: number[]): number;
/**
 * Generates a color array based on a numerical id
 * Note: the range for each component is 0 to 1 with 256 steps
 */
export function colorEncodeId(id: number, opt_array?: number[]): number[];
