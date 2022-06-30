# image2file

[![NPM version](https://img.shields.io/npm/v/image2file?color=a1b858&label=)](https://www.npmjs.com/package/image2file)

## 📎 Installation
```sh
$ npm install image2file
```
## 👽 Usage

```js
import { imageToBase64 } from 'image2file'
```

## ✈️ Functions

### Image Functions
| name                      | description                    |
| ------------------------- | ------------------------------ |
| `imageDataToFile`         | ImageData to File              |
| `imageElementToFile`      | HTMLImageElement to File       |
| `imageDataToImageElement` | ImageData to HTMLImageElement  |
| `imageToBase64`           | Image to Base64                |
| `imageToImageElement`     | Image file to HTMLImageElement |

### SVG Functions
| name                | description            |
| ------------------- | ---------------------- |
| `svgToBase64`       | SVG to svg base64      |
| `svgFileToBase64`   | SVG File to SVG Base64 |
| `svgToImageElement` | SVG to ImageElement    |
| `svgToImageBase64`  | SVG to image base64    |
| `svgToImageFile`    | SVG to image file      |

### PSD Functions
| name                | description             |
| ------------------- | ----------------------- |
| `psdToImageFile`    | PSD to image file       |
| `psdToImageElement` | PSD to HTMLImageElement |
| `psdToImageData`    | PSD to ImageData        |
| `psdToBase64`       | PSD to Base64           |

### Other Functions
| name                   | description                |
| ---------------------- | -------------------------- |
| `fileToBase64`         | File to Base64             |
| `blobToArrayBuffer`    | Blob to ArrayBuffer        |
| `base64ToFile`         | Base64 to File             |
| `base64ToImageElement` | Base64 to HTMLImageElement |

## Type Declares

```ts
function generateFileReader<T>(source: File | Blob): Promise<T | undefined | null>
function fileToBase64<T = string>(source: File): Promise<T | null | undefined>
function blobToArrayBuffer<T = ArrayBuffer>(source: Blob): Promise<T | null | undefined>
function base64ToFile(base64: string, filename: string): File
function base64ToImageElement(base64: string): HTMLImageElement
function imageDataToFile(imageData: ImageData, filename: string, fileType?: string, quality?: number): Promise<File>
function imageElementToFile(imageEl: HTMLImageElement, filename: string, fileType?: string, quality?: number): Promise<File>
function imageDataToImageElement(imageData: ImageData, fileType?: string, quality?: number): Promise<HTMLImageElement>
function imageToImageElement(imageFile: File): Promise<HTMLImageElement | undefined>
function imageToBase64(image: ImageData | HTMLImageElement, fileType?: string, quality?: number): Promise<string>
function psdToImageFile(file: File, fileType?: string, quality?: number): Promise<File>
function psdToImageElement(file: File, fileType?: string, quality?: number): Promise<HTMLImageElement>
function psdToImageData(file: File): Promise<ImageData>
function psdToBase64(file: File, fileType?: string, quality?: number): Promise<string>
function svgToBase64(file: File | SVGElement): Promise<string | null | undefined> | undefined
function svgFileToBase64(file: File): Promise<string | null | undefined> | undefined
function svgElementToBase64(file: SVGElement): Promise<string | null | undefined> | undefined
function svgToImageElement(file: File): Promise<HTMLImageElement | undefined>
function svgToImageBase64(file: File, fileType?: string, quality?: number): Promise<string | undefined>
function svgToImageFile(file: File, fileType?: string, quality?: number): Promise<File | undefined>
```
