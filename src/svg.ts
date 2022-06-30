import { base64ToFile, base64ToImageElement, fileToBase64 } from './common'
import { imageToBase64 } from './image'

/**
 * SVG to SVG Base64
 * @param file
 * @returns
 */
export function svgToBase64(file: File | SVGElement) {
  /// TODO SVGElement to base64
  if (file instanceof File)
    return fileToBase64(file)
}

/**
 * SVG File to SVG Base64
 * @param file
 * @returns
 */
export function svgFileToBase64(file: File) {
  return svgToBase64(file)
}

/**
 * SVGElement to SVG Base64
 * @param file
 * @returns
 */
export function svgElementToBase64(file: SVGElement) {
  return svgToBase64(file)
}

/**
 * SVG to ImageElement
 * @param file
 * @returns
 */
export async function svgToImageElement(file: File) {
  const base64 = await svgToBase64(file)
  if (base64)
    return base64ToImageElement(base64)
}

/**
 * SVG to image base64
 * @param file
 * @param fileType
 * @param quality
 * @returns
 */
export async function svgToImageBase64(file: File, fileType?: string, quality?: number) {
  const base64 = await svgToBase64(file)
  if (!base64)
    return
  const el = base64ToImageElement(base64)
  return imageToBase64(el, fileType, quality)
}

/**
 * SVG to image file
 * @param file
 * @returns
 */
export async function svgToImageFile(file: File, fileType?: string, quality?: number) {
  const image = await svgToImageBase64(file, fileType, quality)
  if (image)
    return base64ToFile(image, file.name)
}
