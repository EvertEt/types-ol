import Tile from 'ol/Tile';
import { LoadFunction } from 'ol/Tile';
import { Options } from 'ol/Tile';
import TileState from 'ol/TileState';
import { TileCoord } from 'ol/tilecoord';

export default class ImageTile extends Tile {
    constructor(
        tileCoord: TileCoord,
        state: TileState,
        src: string,
        crossOrigin: string,
        tileLoadFunction: LoadFunction,
        opt_options?: Options,
    );
    /**
     * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
     */
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    /**
     * Load not yet loaded URI.
     */
    load(): void;
}
