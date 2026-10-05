declare module "react-simple-maps" {
  import type { CSSProperties, ReactNode, MouseEventHandler } from "react";

  type Coordinates = [number, number];

  type GeographyProperties = {
    name?: string;
    [key: string]: unknown;
  };

  type GeographyObject = {
    rsmKey: string;
    svgPath?: string;
    id?: string | number;
    properties?: GeographyProperties;
    [key: string]: unknown;
  };

  type GeographyStyle = {
    default?: CSSProperties;
    hover?: CSSProperties;
    pressed?: CSSProperties;
  };

  export function ComposableMap(props: {
    children?: ReactNode;
    width?: number;
    height?: number;
    projection?: string | ((...args: unknown[]) => unknown);
    projectionConfig?: Record<string, unknown>;
    className?: string;
    style?: CSSProperties;
    preserveAspectRatio?: string;
  }): JSX.Element;

  export function Geographies(props: {
    geography: string | Record<string, unknown>;
    children: (args: {
      geographies: GeographyObject[];
      outline?: GeographyObject;
      borders?: GeographyObject;
    }) => ReactNode;
    className?: string;
  }): JSX.Element;

  export function Geography(props: {
    geography: GeographyObject;
    children?: ReactNode;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
    filter?: string;
    style?: GeographyStyle;
    onMouseEnter?: MouseEventHandler<SVGPathElement>;
    onMouseLeave?: MouseEventHandler<SVGPathElement>;
    tabIndex?: number | string;
    role?: string;
    "aria-label"?: string;
  }): JSX.Element;

  export function Marker(props: {
    children?: ReactNode;
    coordinates: Coordinates;
    className?: string;
    style?: GeographyStyle;
    onMouseEnter?: MouseEventHandler<SVGGElement>;
    onMouseLeave?: MouseEventHandler<SVGGElement>;
  }): JSX.Element;

  export function Graticule(props: {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    step?: [number, number] | number[];
    className?: string;
  }): JSX.Element;

  export function Sphere(props: {
    id?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
  }): JSX.Element;
}