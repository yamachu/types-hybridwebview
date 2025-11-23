/// <reference types="@yamachu/types-hybridwebview" />

// if you want to use specific version, you can override HybridWebViewType like this
interface Window {
  HybridWebView: HybridWebViewNet9_0.HybridWebViewType;
}
// NOTICE: The version specified here will be used throughout this project.

window.HybridWebView.SendRawMessage("Hello with override");
