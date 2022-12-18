export default function (url: URL, params: Record<string, string> = {}) {
  return new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
        ...Array.from(url.searchParams.entries()),
        ...Object.entries(params),
    ])}`,
  )
}
