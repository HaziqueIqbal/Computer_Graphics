export function drawArc(x, y, radius, Color, startAngle, endAngle, sweep ,THREE,scene) {
    const material = new THREE.MeshBasicMaterial({ color: Color });
    const points = [];
    for (var i = startAngle; i <= endAngle; i++) {
        points.push(new THREE.Vector3(Math.cos(i * sweep * (Math.PI / 180)) * radius, Math.sin(i * sweep * (Math.PI / 180)) * radius, 0));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    line.position.set(x, y, 0)
    scene.add(line);
}