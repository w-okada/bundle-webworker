const ctx: Worker = self as any;

onmessage = async (event) => {
    setTimeout(() => {
        ctx.postMessage(`[WORKER_TS] Waited ${event.data}ms`);
    }, event.data)

}
