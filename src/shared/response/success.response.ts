
export enum HttpStatus {
    OK= 200,
    CREATED = 201,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
}

export class HttpResponse {
    public status: string;
    public data: object;

    constructor( data: object ){
        this.status = 'ok';
        this.data = data
    }
}