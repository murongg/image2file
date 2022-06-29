/**
 * generate FileReader
 * @param source
 */
export function generateFileReader<T>(source: File | Blob): Promise<T | undefined | null> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    if (source instanceof File)
      reader.readAsDataURL(source)
    else if (source instanceof Blob)
      reader.readAsArrayBuffer(source)

    reader.onload = (e: ProgressEvent<FileReader>) => resolve(e.target?.result as unknown as T)
  })
}

/**
 * File to Base64
 * @param file
 * @returns
 */
export function fileToBase64<T = string>(source: File) {
  return generateFileReader<T>(source)
}

/**
 * Blob to ArrayBuffer
 * @param source
 * @returns
 */
export function blobToArrayBuffer<T = ArrayBuffer>(source: Blob) {
  return generateFileReader<T>(source)
}

/**
 *  Base64 to File
 * @param dataUrl
 * @param filename
 * @returns
 */
export function base64ToFile(base64: string, filename: string) {
  const dataArr = base64.split(',')
  const fileType = dataArr.length > 0 ? dataArr[0] : ''
  const mimes = fileType.match(/:(.*);/)
  const mime = mimes?.length ? mimes[1] : ''
  const originStr = atob(dataArr[1])
  let n = originStr.length
  const u8Arr = new Uint8Array(n)
  while (n--)
    u8Arr[n] = originStr.charCodeAt(n)

  return new File([u8Arr], filename, { type: mime })
}

/**
 * Base64 to HTMLImageElement
 * @param base64
 * @returns
 */
export function base64ToImageElement(base64: string) {
  const image = new Image()
  image.src = base64
  return image
}
