export default interface IStorageProvider {
  saveFile(fie: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
