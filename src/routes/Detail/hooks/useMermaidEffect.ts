import { useEffect } from "react";
import mermaid from "mermaid";

const useMermaidEffect = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
    });
    if (!document) return;
    const elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName("language-mermaid");
    if (!elements) return;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement; // Cast to HTMLElement
      mermaid.render(
        "mermaid" + i,
        elements[i].textContent || "",
        element // Pass the HTMLElement as the third argument
      );
    }
  }, []);

  return;
};

export default useMermaidEffect;
