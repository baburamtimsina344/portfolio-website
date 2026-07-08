declare module "react-simple-maps" {
  import type { CSSProperties, ReactNode } from "react";

  type Coordinates = [number, number];

  type GeographyObject = {
    rsmKey: string;
    [key: string]: unknown;
  };

  type GeographyStyle = {
    default?: CSSProperties;
    hover?: CSSProperties;
    pressed?: CSSProperties;
  };

  export function ComposableMap(props: {
    children?: ReactNode;
    projectionConfig?: Record<string, unknown>;
    style?: CSSProperties;
  }): JSX.Element;

  export function Geographies(props: {
    geography: string | Record<string, unknown>;
    children: (args: { geographies: GeographyObject[] }) => ReactNode;
  }): JSX.Element;

  export function Geography(props: {
    geography: GeographyObject;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: GeographyStyle;
  }): JSX.Element;

  export function Marker(props: {
    children?: ReactNode;
    coordinates: Coordinates;
  }): JSX.Element;
}


