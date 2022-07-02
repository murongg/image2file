import Psd from '@webtoon/psd'
import { imageDataToFile, imageDataToImageElement, imageToBase64, imageToSvg } from './image'

/**
 * PSD to image file
 * @param file
 * @param fileType
 * @param quality
 * @returns
 */
export async function psdToImageFile(file: File, fileType?: string, quality?: number) {
  const imageData = await psdToImageData(file)
  return imageDataToFile(imageData, file.name, fileType, quality)
}

/**
 * PSD to HTMLImageElement
 * @param file
 * @param fileType
 * @param quality
 * @returns
 */
export async function psdToImageElement(file: File, fileType?: string, quality?: number) {
  const imageData = await psdToImageData(file)
  return imageDataToImageElement(imageData, fileType, quality)
}

/**
 * PSD to Base64
 * @param file
 * @param fileType
 * @param quality
 * @returns
 */
export async function psdToBase64(file: File, fileType?: string, quality?: number) {
  const imageData = await psdToImageData(file)
  return imageToBase64(imageData, fileType, quality)
}

/**
 * PSD to SVG
 * @param file
 * @param fileType
 * @param quality
 * @returns
 */
export async function psdToSvg(file: File, fileType?: string, quality?: number) {
  const base64 = await psdToBase64(file, fileType, quality)
  return imageToSvg(base64)
}

/**
 * PSD to ImageData
 * @param file
 * @returns
 */
export async function psdToImageData(file: File) {
  const result = await file.arrayBuffer()
  const psdFile = Psd.parse(result)
  const composite = await psdFile.composite()
  const imageData = new ImageData(
    composite,
    psdFile.width,
    psdFile.height,
  )
  return imageData
}
