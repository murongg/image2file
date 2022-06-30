import { imageToImageElement } from '../src'
const file = document.querySelector('#file') as HTMLInputElement
file.onchange = async (e: Event) => {
  const files = (e.target as any).files as File[]
  const file = files[0]
  const el = await imageToImageElement(file)
  if (el)
    document.querySelector('body')?.append(el)
}
