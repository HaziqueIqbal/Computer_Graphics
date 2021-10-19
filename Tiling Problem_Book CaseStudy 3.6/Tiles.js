import { pointss } from "/pointss.js";
import { drawArc } from "/drawArc.js";
export function Tiles(row, Column, THREE, scene) {
    const path = new THREE.Path();
    for (let k = 0; k < row; k++) {
        for (let i = 0; i < Column; i++) {
            for (let j = 0; j < 4; j++) {
                path.lineTo(pointss[0][j][0] + i, pointss[0][j][1] + k);
                drawArc(pointss[0][j][0] + i, pointss[0][j][1] + k, 1, "blue", pointss[0][j][2], pointss[0][j][3], pointss[0][j][4], THREE, scene);
                // console.log(pointss[0][j][0] + i, pointss[0][j][1] + k)
            }
            path.moveTo(pointss[0][0][0] + i, pointss[0][0][1] + k)
        }
        path.moveTo(0, k)
        console.log(0, k);
    }
    const points = path.getPoints();
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: "blue" });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
}