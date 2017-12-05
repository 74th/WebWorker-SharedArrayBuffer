let buf;
let lenBuf;
let f32;
let len;

self.addEventListener("set_buffer", (e) => {
	console.log("test");
	console.log("e");
});
self.onmessage = (e) => {
	console.log("[worker]receive message");
	switch (e.data.mes) {
		case "post_test":
			console.log("[worker]post_test", e);
			break;
		case "send_buf":
			buf = e.data.body;
			f32 = new Float32Array(buf);
			break;
		case "set_len_buffer":
			lenBuf = e.data.body;
			len = new Int32Array(lenBuf);
			break;
		case "run":
			setInterval(main, 120);
			break;
	}
};
let n = 0;
function main() {
	if (n < f32.length) {
		f32[n] = Math.random();
	}
	n++;
	len[0] = n;
}
