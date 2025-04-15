/**
 * NativeModules is a global built-in object provided by Lynx in the JavaScript runtime.
 * It serves as the access point for all native modules, and all native module declarations must be defined within it.
 */

declare let NativeModules: {
  NativeLocalStorageModule: {
    setStorageItem(key: string, value: string): void;
    getStorageItem(key: string): string | null;
    clearStorage(): void;
  };
};