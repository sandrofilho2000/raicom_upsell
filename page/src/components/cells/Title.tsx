'use client';

import { iTitle } from '@/interfaces';
import { useEffect, useState } from 'react';

type TitleProps = {
  title: iTitle;
};

const Title = ({ title }: TitleProps) => {
  const { full_title, highlight } = title;
  const [html, setHtml] = useState<string>(full_title);

  useEffect(() => {
    if (!highlight) return;

    const parts = full_title.split(highlight);

    if (parts.length > 1) {
      const newHtml =
        parts[0] + `<span class="text-primary">${highlight}</span>` + parts[1];
      setHtml(newHtml);
    } else {
      setHtml(full_title);
    }
  }, [full_title, highlight]);

  return (
    <h2
      className="font-bold text-xl md:text-2xl mb-4 text-center"
      dangerouslySetInnerHTML={{ __html: html }}
    ></h2>
  );
};

export default Title;
