declare global {
  interface Window {
    __TAURI__?: {
      window: {
        appWindow: {
          close: () => Promise<void>;
          minimize: () => Promise<void>;
          maximize: () => Promise<void>;
          unmaximize: () => Promise<void>;
          toggleMaximize: () => Promise<void>;
          isMaximized: () => Promise<boolean>;
          show: () => Promise<void>;
          hide: () => Promise<void>;
        };
      };
      tauri: {
        invoke: (cmd: string, args?: Record<string, unknown>) => Promise<unknown>;
      };
    };
  }
}

export {};
