import Comparison from 'ol/format/filter/Comparison';

/**
 * [constructor description]
 */
export default class IsLike extends Comparison {
    constructor(
        propertyName: string,
        pattern: string,
        opt_wildCard?: string,
        opt_singleChar?: string,
        opt_escapeChar?: string,
        opt_matchCase?: boolean,
    );
}
