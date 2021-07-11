import Feature from 'ol/Feature';
import { Extent } from 'ol/extent';
import { WriteOptions } from 'ol/format/Feature';
import GMLBase from 'ol/format/GMLBase';
import { Options } from 'ol/format/GMLBase';
import Geometry from 'ol/geom/Geometry';
import LineString from 'ol/geom/LineString';
import LinearRing from 'ol/geom/LinearRing';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiPolygon from 'ol/geom/MultiPolygon';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';

export default class GML3 extends GMLBase {
    constructor(opt_options?: Options);
    curveMemberParser(node: Element, objectStack: any[]): void;
    exteriorParser(node: Element, objectStack: any[]): void;
    interiorParser(node: Element, objectStack: any[]): void;
    readCurve(node: Element, objectStack: any[]): LineString | undefined;
    readEnvelope(node: Element, objectStack: any[]): Extent | undefined;
    readFlatPos(node: Node, objectStack: any[]): number[] | undefined;
    readFlatPosList(node: Element, objectStack: any[]): number[] | undefined;
    readLineStringSegment(node: Element, objectStack: any[]): number[] | undefined;
    readMultiCurve(node: Element, objectStack: any[]): MultiLineString | undefined;
    readMultiSurface(node: Element, objectStack: any[]): MultiPolygon | undefined;
    readPatch(node: Element, objectStack: any[]): number[][] | undefined;
    readPolygonPatch(node: Element, objectStack: any[]): number[][] | undefined;
    readSegment(node: Element, objectStack: any[]): number[] | undefined;
    readSurface(node: Element, objectStack: any[]): Polygon | undefined;
    surfaceMemberParser(node: Element, objectStack: any[]): void;
    writeCurveOrLineString(node: Element, geometry: LineString, objectStack: any[]): void;
    writeEnvelope(node: Element, extent: Extent, objectStack: any[]): void;
    writeFeatureElement(node: Element, feature: Feature<Geometry>, objectStack: any[]): void;
    /**
     * Encode an array of features in GML 3.1.1 Simple Features.
     */
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    /**
     * Encode an array of features in the GML 3.1.1 format as an XML node.
     */
    writeFeaturesNode(features: Feature<Geometry>[], opt_options?: WriteOptions): Element;
    writeGeometryElement(node: Node, geometry: Geometry | Extent, objectStack: any[]): void;
    /**
     * Encode a geometry in GML 3.1.1 Simple Features.
     */
    writeGeometryNode(geometry: Geometry, opt_options?: WriteOptions): Node;
    writeLinearRing(node: Element, geometry: LinearRing, objectStack: any[]): void;
    writeLineStringOrCurveMember(node: Node, line: LineString, objectStack: any[]): void;
    writeMultiCurveOrLineString(node: Element, geometry: MultiLineString, objectStack: any[]): void;
    writeMultiPoint(node: Element, geometry: MultiPoint, objectStack: any[]): void;
    writeMultiSurfaceOrPolygon(node: Element, geometry: MultiPolygon, objectStack: any[]): void;
    writePoint(node: Element, geometry: Point, objectStack: any[]): void;
    writePointMember(node: Node, point: Point, objectStack: any[]): void;
    writeRing(node: Node, ring: LinearRing, objectStack: any[]): void;
    writeSurfaceOrPolygon(node: Element, geometry: Polygon, objectStack: any[]): void;
    writeSurfaceOrPolygonMember(node: Node, polygon: Polygon, objectStack: any[]): void;
}
