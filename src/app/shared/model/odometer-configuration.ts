export interface IOdometerConfiguration {
    value?: number;
    format?: string;
    animation?: string;
}

export class OdometerConfiguration implements IOdometerConfiguration {
    constructor(
        public value?: number,
        public format?: string,
        public animation?: string
    ) { };
}