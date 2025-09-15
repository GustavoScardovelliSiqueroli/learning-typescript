import { Painting } from "../models/paintings";
export interface PaintingRepository {
  currentId: number;

  save(painting: Painting): Promise<Painting>;
  delete(paitingId: number): Promise<void>;
  getAll(): Promise<Painting[]>;
  update(paitingId: string, painting: Painting): Promise<Painting>;
}
