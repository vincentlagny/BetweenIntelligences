import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
import elkLayouts from 'https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0.1.8/dist/mermaid-layout-elk.esm.min.mjs';

mermaid.registerLayoutLoaders(elkLayouts);

mermaid.initialize({
    startOnLoad: false,         // Material déclenche le rendu
    securityLevel: 'loose',
    layout: 'elk'
});

// Indique à Material d'utiliser CETTE instance
window.mermaid = mermaid;
