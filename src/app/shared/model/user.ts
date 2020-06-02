export interface IUser {
    fullName?: string;
    email?: string;
    password?: string;
}

export class User implements IUser {
    constructor(
        public fullName?: string,
        public email?: string,
        public password?: string
    ){};
}