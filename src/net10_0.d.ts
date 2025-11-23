// ref: https://github.com/dotnet/maui/blob/10.0.0/src/Core/src/Handlers/HybridWebView/HybridWebView.ts
declare global {
  namespace HybridWebViewNet10_0 {
    export type HybridWebViewType = {
      /**
       * Send a raw message to the .NET host application.
       * The message is sent directly and not processed or serialized.
       *
       * @param {string} message The message to send to the .NET host application.
       */
      SendRawMessage: (message: string) => void;

      /**
       * Invoke a .NET method on the InvokeJavaScriptTarget instance.1
       * The method name and parameters are serialized and sent to the .NET host application.
       *
       * @param {string} methodName The name of the .NET method to invoke.
       * @param {any} paramValues The parameters to pass to the .NET method. If the method takes no parameters, this can be omitted.
       *
       * @returns {Promise<any>} A promise that resolves with the result of the .NET method invocation.
       */
      InvokeDotNet: (methodName: string, paramValues?: any) => Promise<any>;
    };
  }
}

export {};
