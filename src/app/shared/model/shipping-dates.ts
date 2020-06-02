export interface IShippingDates {
    iphone?: string;
    macbook?: string;
    watch?: string;
}

export class ShippingDates implements IShippingDates {
    constructor(
        public iphone?: string,
        public macbook?: string,
        public watch?: string
    ) { };
}