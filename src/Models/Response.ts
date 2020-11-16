import { Response as Resp } from 'express';
interface RespObject {
    success: boolean,
    content: object

}

export default class Response {
    private respObject: RespObject = {
        content: {},
        success: true
    };

    constructor(private response: Resp,
        private content: object = {},
        private success: boolean = true,
        private status: number = 200) {
        this.respObject.content = this.content;
        this.respObject.success = this.success;
    }

    send = () => {
        this.response.send(this.respObject).status(this.status);
    }
}