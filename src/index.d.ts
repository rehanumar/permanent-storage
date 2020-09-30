export default Storage;

declare class Storage {
  constructor(storage: any);
  _storage: any;
  _data: {};
  _setAllItems: () => void;
  setItem: (key: any, value: any) => undefined;
  getItem: (key: any) => string;
  clear: () => void;
  removeItem: (key: any) => void;
}
