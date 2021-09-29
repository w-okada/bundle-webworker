

onmessage = function (event) {
    setTimeout(() => {
        postMessage(`[WORKER_JS] Waited ${event.data}ms`);
    }, event.data)
};