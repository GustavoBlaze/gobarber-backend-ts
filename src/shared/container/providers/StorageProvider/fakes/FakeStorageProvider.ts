import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private storage: Set<string> = new Set();

  public async saveFile(file: string): Promise<string> {
    this.storage.add(file);
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    this.storage.delete(file);
  }
}

export default FakeStorageProvider;
