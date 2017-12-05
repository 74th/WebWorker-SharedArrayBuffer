function main() {
	const buf = new SharedArrayBuffer(1024);
	const lenBuf = new SharedArrayBuffer(4);
	const f32 = new Float32Array(buf);
	const len = new Int32Array(lenBuf);

	const worker = new Worker("webworker.js");

	worker.postMessage({ mes: "post_test", body: { test: "post" } });
	worker.postMessage({ mes: "send_buf", body: buf });
	worker.postMessage({ mes: "set_len_buffer", body: lenBuf });
	worker.postMessage({ mes: "run" });

	const divlen = document.getElementById("len");
	const divf32 = document.getElementById("f32");

	setInterval(() => {
		nF32 = len[0];
		divlen.innerText = len.toString();
		divf32.innerText =f32.slice(0, nF32).toString();
	}, 500);
}