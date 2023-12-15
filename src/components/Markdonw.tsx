import React, { useEffect } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';

marked.use({
  renderer: {
    code(code, language) {
      const validLanguage = hljs.getLanguage(language as string) ? language : 'plaintext';
      return hljs.highlight(validLanguage as string, code).value;
    }
  }
});

const Markdonw: React.FC<{ markdown: string }> = (props) => {
  const { markdown } = props;

  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      // tables: true,
      breaks: true,
      pedantic: false,
      // sanitize: true,
      // smartLists: true,
      // smartypants: false,
      // highlight: function (code: any) {
      //   return hljs.highlightAuto(code).value;
      // },
    });
  }, [])

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{
        __html: marked(markdown),
      }}
    ></div>
  ); 
}

export default Markdonw;
