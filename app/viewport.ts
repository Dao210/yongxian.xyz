export default function viewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#0EA5E9' },
      { media: '(prefers-color-scheme: dark)', color: '#0C4A6E' },
    ],
  };
}
