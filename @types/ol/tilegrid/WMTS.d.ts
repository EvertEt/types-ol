import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { Size } from 'ol/size';
import TileGrid from 'ol/tilegrid/TileGrid';

export interface Options {
    extent?: Extent;
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    matrixIds: string[];
    sizes?: Size[];
    tileSize?: number | Size;
    tileSizes?: Size[];
}
export default class WMTSTileGrid extends TileGrid {
    constructor(options: Options);
    getMatrixId(z: number): string;
    /**
     * Get the list of matrix identifiers.
     */
    getMatrixIds(): string[];
}
/**
 * Create a tile grid from a WMTS capabilities matrix set and an
 * optional TileMatrixSetLimits.
 */
export function createFromCapabilitiesMatrixSet(
    matrixSet: any,
    opt_extent?: Extent,
    opt_matrixLimits?: object[],
): WMTSTileGrid;
