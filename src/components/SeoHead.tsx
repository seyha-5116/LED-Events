import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  useEffect(() => {
    const fullTitle = `${title} | LED Events Cambodia`;
    document.title = fullTitle;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && description) {
      descMeta.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
