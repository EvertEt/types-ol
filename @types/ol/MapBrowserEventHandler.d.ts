import PluggableMap from 'ol/PluggableMap';
import Target from 'ol/events/Target';

export default class MapBrowserEventHandler extends Target {
    constructor(map: PluggableMap, moveTolerance?: number);
    /**
     * Clean up.
     */
    disposeInternal(): void;
}
