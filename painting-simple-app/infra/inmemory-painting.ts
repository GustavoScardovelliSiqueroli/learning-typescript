import { Painting } from "../models/paintings";
import { PaintingRepository } from "../repositories/painting-repository";
export class InMemoryPainting implements PaintingRepository {
  private paintings: Painting[] = [];
  currentId: number = 0;

  create(painting: Painting): Painting {
    this.paintings.push(painting);
    this.currentId++;
    return painting;
  }

  delete(paintingId: number): void {
    this.paintings = this.paintings.filter(
      (p: Painting) => p.paintingId !== paintingId
    );
    return;
  }

  getAll(): Painting[] {
    return this.paintings;
  }

  getById(paintingId: number): Painting | null {
    let painting = this.paintings.find(
      (p: Painting) => p.paintingId == paintingId
    );
    if (!painting) {
      return null;
    }
    return painting;
  }

  update(painting: Painting): Painting {
    this.paintings = this.paintings.map((p: Painting) =>
      p == painting ? painting : p
    );
    return painting;
  }
}
