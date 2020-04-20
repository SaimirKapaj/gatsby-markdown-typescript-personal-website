import React, { ReactNode } from 'react';

interface Props {
  content: any;
}

/**
 * FormatHtml component
 *
 * @param {Props} props
 */
const FormatHtml: React.FC<Props> = ({ content }) => (
  <span
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
