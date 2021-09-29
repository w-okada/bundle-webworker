
// @ts-ignore
import libJs from '../src-worker/worker.js'

export class WebWorkerLibJs{
    worker:Worker
    constructor(){
        this.worker = libJs()
        this.worker.onmessage = (mess) =>{
            console.log(`[WebWorkerLibJs] ${mess.data}`)
        }
    }

    sendMessage = () =>{
        this.worker.postMessage(2 * 1000);
    }
}
