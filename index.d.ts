/// <reference path="./src/net9_0.d.ts" />
/// <reference path="./src/net10_0.d.ts" />

declare global {
  interface Window {
    HybridWebView: latest.HybridWebViewType;
  }

  namespace latest {
    export type HybridWebViewType = HybridWebViewNet10_0.HybridWebViewType;
  }
}

export {};
