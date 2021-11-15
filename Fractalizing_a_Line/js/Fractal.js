class Fractal {
    static path;
    constructor() {
        this.path = new THREE.Path();
        console.log(this.path)
        this.i = 0;
        this.b = false;
    }
    fract(A, B, stdDev) {
        this.i = 6;
        var xDiff = A.x - B.x,
            yDiff = A.y - B.y;
        var C = new THREE.Vector2();
        var minLength = 0.3;
        var factor = 0.365;
        if (xDiff * xDiff + yDiff * yDiff < minLength) {
            this.path.lineTo(B.x, B.y);
            // console.log(B)
        } else {
            stdDev *= factor;
            let t = 0;
            for (let i = 0; i < 12; i++) {
                t += Math.random() / 32768.0;
            }
            if (!this.b) {
                t = (t + this.i) * stdDev;
                this.b = true;
            } else {
                t = (t - this.i) * stdDev;
                this.b = false
            }
            // t = (t + this.i) * stdDev;
            C.x = 0.5 * (A.x + B.x) + t * (B.y - A.y);
            C.y = 0.5 * (A.y + B.y) - t * (B.x - A.x);
            this.fract(A, C, stdDev);
            this.fract(C, B, stdDev);

        }
    }
    draw() {
        const points = this.path.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0xffffff });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
    }
}