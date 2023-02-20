import { STATIC_FOLDER } from "@main/constants/path";
import multer from "multer";

class FileUploader {
  private readonly multerInstance: multer.Multer;

  constructor() {
    const storage = multer.diskStorage({
      destination: STATIC_FOLDER,
    });

    this.multerInstance = multer({ storage });
  }

  public single(name: string) {
    return this.multerInstance.single(name);
  }

  public array(name: string) {
    return this.multerInstance.array(name);
  }
}

export const adaptFileUpload = new FileUploader();
