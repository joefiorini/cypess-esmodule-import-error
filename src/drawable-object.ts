import { Context } from "konva/lib/Context";
import { Canvas } from "konva/lib/Canvas";

export class DrawableObject {
  constructor(
    private canvas = new Canvas({}),
    private konvaContext: Context = new Context(canvas)
  ) {}

  draw() {
    this.konvaContext.closePath();
  }
}
