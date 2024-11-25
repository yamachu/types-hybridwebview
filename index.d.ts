/// <reference path="./src/net9_0.d.ts" />

declare global {
  interface Window {
    HybridWebView: latest.HybridWebViewType;
  }

  namespace latest {
    export type HybridWebViewType = HybridWebViewNet9_0.HybridWebViewType;
  }
}

export {};
