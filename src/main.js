import * as Svg from "./svg/index.js";
import * as Paralelogram from "./geometry/paralelogram.js";
import * as Triangle from './geometry/triangle.js'
import * as Circle from './geometry/circle.js'

let interactions = [];

const canvas = document.getElementById('canvas');
canvas.addEventListener('click', clickHandler);

function clickHandler(event) {
  const position = Svg.relativePositionFrom(canvas, event);
  interactions.push(position);

  if(interactions.length === 3) {
    const trianglePoints = interactions;
    const paralelogramPoints = Paralelogram.fromTriangle(trianglePoints)

    const polygon = Svg.polygon(paralelogramPoints);
    canvas.appendChild(polygon);

    const center = Paralelogram.center(paralelogramPoints);

    const area = Triangle.area(trianglePoints);
    const ratio = Circle.ratio(area);

    const paralelogramCircle = Svg.circle(center.x, center.y, ratio, 'yellow');

    canvas.appendChild(paralelogramCircle);
  }

  if(interactions.length > 3) {
    return;
  }

  const circle = circle(position.x, position.y, 11, 'red');
  canvas.appendChild(circle);
}