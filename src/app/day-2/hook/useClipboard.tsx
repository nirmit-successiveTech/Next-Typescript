import { useState } from "react";

export default function useClipboard() {
  const [status, setStatus] = useState<string>('Copy');

  const copy = async (text: string) => {
    if (!text) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const element = document.createElement('textarea');
        element.value = text;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
      }
      setStatus('Copied');
      setTimeout(() => setStatus('Copy'), 2000);
    } catch {
      setStatus('Failed to copy');
      setTimeout(() => setStatus('Copy'), 2000);
    }
  };

  return { status, copy };
}
