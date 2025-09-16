import { CreatePaintingDTO } from "../dtos/painting-dto";
import { Painting } from "../models/paintings";
import { PaintingRepository } from "../repositories/painting-repository";

export class PaintingService {
  constructor(private readonly repo: PaintingRepository) {}

  startNewPainting(paintingDTO: CreatePaintingDTO): Painting {
    let painting: Painting = {
      paintingId: this.repo.currentId + 1,
      name: paintingDTO.name,
      startedAt: new Date(),
    };
    return this.repo.create(painting);
  }

  finishPainting(paintinId: number): boolean {
    let painting = this.repo.getById(paintinId);
    if (!painting) {
      return false;
    }
    painting.finishedAt = new Date();
    this.repo.update(painting);
    return true;
  }

  getAllPaintings(): Painting[] {
    return this.repo.getAll();
  }
  deletePainting(paintingId: number): void {
    this.repo.delete(paintingId);
  }
}
