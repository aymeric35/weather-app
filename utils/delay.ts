export default function (delayInMs: number) {
  return new Promise(resolve => setTimeout(resolve, delayInMs))
}
