# @yamachu/types-hybridwebview

Unofficial [.NET MAUI HybridWebView](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/hybridwebview?view=net-maui-10.0) type definitions.

## Installation

```bash
$ npm install @yamachu/types-hybridwebview
```

## Usage

To use the latest version of the HybridWebView types:

```ts
/// <reference types="@yamachu/types-hybridwebview" />

window.HybridWebView.postMessage("Hello from myscript.ts");
```

If you want to use specific versioned HybridWebView types, you can do so like this:

```ts
/// <reference types="@yamachu/types-hybridwebview" />

interface Window {
    HybridWebView: HybridWebView9_0.HybridWebView; // e.g. `HybridWebView9_0` is namespace, you can find these definitions in ./src/*.d.ts
}

window.HybridWebView.postMessage("Hello from myscript.ts");
```

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
See the LICENSE file for details.
