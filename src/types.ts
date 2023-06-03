import { ComponentType } from "react";

export type SVGProps = React.HTMLProps<SVGSVGElement>;
export type Icon = ComponentType<any>;
export type IconSet = Record<string, Icon>;
