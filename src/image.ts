import { base64ToFile, base64ToImageElement } from './common'

/**
 * ImageData to File
 * @param imageData
 * @param filename
 */
export async function imageDataToFile(imageData: ImageData, filename: string, fileType?: string, quality?: number) {
  const dataURL = await imageToBase64(imageData, fileType, quality)
  return base64ToFile(dataURL, filename)
}

/**
 * HTMLImageElement to File
 * @param imageEl
 * @param filename
 * @param fileType
 * @param quality
 * @returns
 */
export async function imageElementToFile(imageEl: HTMLImageElement, filename: string, fileType?: string, quality?: number) {
  const dataURL = await imageToBase64(imageEl, fileType, quality)
  return base64ToFile(dataURL, filename)
}

/**
 * ImageData to HTMLImageElement
 * @param imageData
 * @returns
 */
export async function imageDataToImageElement(imageData: ImageData, fileType?: string, quality?: number) {
  const base64 = await imageToBase64(imageData, fileType, quality)
  return base64ToImageElement(base64)
}

/**
 * Image to Base64
 * @param image
 * @param fileType
 * @param quality
 * @returns
 */
export function imageToBase64(image: ImageData | HTMLImageElement, fileType = 'image/jpeg', quality = 1): Promise<string> {
  const canvasElement = document.createElement('canvas')
  const context = canvasElement.getContext('2d') as CanvasRenderingContext2D
  canvasElement.width = image.width
  canvasElement.height = image.height
  return new Promise((resolve) => {
    if (image instanceof ImageData) {
      context.putImageData(image, 0, 0, 0, 0, image.width, image.height)
      const dataURL = canvasElement.toDataURL(fileType, quality)
      resolve(dataURL)
    }
    else if (image instanceof HTMLImageElement) {
      image.onload = () => {
        context?.drawImage(image, 0, 0, image.width, image.height)
        const dataURL = canvasElement.toDataURL(fileType, quality)
        resolve(dataURL)
      }
    }
  })
}
