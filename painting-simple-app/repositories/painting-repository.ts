import { Painting } from "../models/paintings";
export interface PaintingRepository {
  currentId: number;

  create(painting: Painting): Painting;
  delete(paintingId: number): void;
  getAll(): Painting[];
  getById(paintingId: number): Painting | null;
  update(painting: Painting): Painting;
}
