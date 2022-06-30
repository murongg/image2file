import { svgToImageFile } from '../src'
const file = document.querySelector('#file') as HTMLInputElement
file.onchange = async (e: Event) => {
  const files = (e.target as any).files as File[]
  const file = files[0]
  await svgToImageFile(file)
}
