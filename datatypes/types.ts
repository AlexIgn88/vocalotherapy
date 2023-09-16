export type page = {
    name: string,
    src: string,
    restricted?: (_: any) => Boolean,
    icon?: any
};

export type breakpointsArrType = string[];

export type valueArrType = number[];

export type valieForBreakpoints = {
    base: string,
    '2xl'?: string,
    xl?: string,
    lg?: string,
    md?: string,
    sm?: string
};