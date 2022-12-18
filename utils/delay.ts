export default function (delayInms: number) {
  return new Promise(resolve => setTimeout(resolve, delayInms))
}
