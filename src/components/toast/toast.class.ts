export class Toast {

    cx: number;

    constructor(
        public title: string,
        public message: string,
        public color: string,
        public timeout: number
    ) {
        this.cx = 0;
    }
}
