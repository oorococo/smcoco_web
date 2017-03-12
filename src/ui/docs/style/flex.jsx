import React, { PureComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/styles/tomorrow-night-eighties'

const beautifyHtml = require('js-beautify').html

export default class Sidebar extends PureComponent {
    render() {
        return (
            <div>
                <h4>Flex Align</h4>
                <p>
                    <div>the css mappings are:</div>
                    <code><i>flex: </i><b>fl</b>, <i>align-items</i>: <b>ai</b>, <i>align-self</i>: <b>as</b></code>
                </p>
                <div className="fl docBox-full-300 ai-c jc-a">
                    <div className="docBox-100-100">Inherit</div>
                    <div className="docBox-100-100 as-b">Baseline</div>
                    <div className="docBox-100-100 as-s">start</div>
                    <div className="docBox-100-100 as-c">Center</div>
                    <div className="docBox-100-100 as-e">End</div>
                    <div className="docBox-100-100 as-q">Stretch</div>
                </div>
                <h5>Code: </h5>
                <div>
                    <SyntaxHighlighter showLineNumbers language="html" style={theme}>
                        {
                            beautifyHtml(`
                                <div className="fl ai-c jc-a">
                                    <div>Inherit</div>
                                    <div className="as-b">Baseline</div>
                                    <div className="as-s">start</div>
                                    <div className="as-c">Center</div>
                                    <div className="as-e">End</div>
                                    <div className="as-q">Stretch</div>
                                </div>
                            `)

                        }
                    </SyntaxHighlighter>
                </div>
            </div>
        )
    }
}
