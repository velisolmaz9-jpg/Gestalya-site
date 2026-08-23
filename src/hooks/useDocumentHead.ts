import { useEffect } from "react";

interface DocumentHeadOptions {
  title: string;
  description?: string;
}

/**
 * Met à jour le titre et la meta description de la page (SPA).
 */
export function useDocumentHead({ title, description }: DocumentHeadOptions) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
