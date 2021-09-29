
// @ts-ignore
import libTs from "worker-loader?inline=no-fallback!./worker.ts";

export class WebWorkerLibTs{
    worker:Worker
    constructor(){
        this.worker = new libTs()
        this.worker.onmessage = (mess) =>{
            console.log(`[WebWorkerLibTs] ${mess.data}`)
        }
    }

    sendMessage = () =>{
        this.worker.postMessage(3 * 1000);
    }
}
