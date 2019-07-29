import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

class Markdonw extends React.Component {
  componentDidMount() {
    this.markedSetting();
  }

  markedSetting() {
    // marked相关配置
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function(code) {
          return hljs.highlightAuto(code).value;
      }
    });
  }

  render() {
    return (
      <div 
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: this.props.markdown ? marked(this.props.markdown) : null,
        }}>
      </div>
    );
  }
}

export default Markdonw;
