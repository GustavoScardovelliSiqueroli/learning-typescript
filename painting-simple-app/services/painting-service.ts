import { CreatePaintingDTO } from "../dtos/painting-dto";
import { Painting } from "../models/paintings";
import { PaintingRepository } from "../repositories/painting-repository";

export class PaintingService {
  constructor(private readonly repo: PaintingRepository) {}

  async startNewPainting(paintingDTO: CreatePaintingDTO): Promise<Painting> {
    let painting: Painting = {
      paintingId: this.repo.currentId + 1,
      name: paintingDTO.name,
      startedAt: new Date(),
    };
    return await this.repo.save(painting);
  }
}
