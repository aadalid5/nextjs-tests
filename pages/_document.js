import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import NewRelicBrowserAgent from '../components/NewRelicBrowserAgent/NewRelicBrowserAgent';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='eng'>
                <Head>
                    <meta name='custom-meta' content='abc'/>
                    {/* <script async type='text/javascript' src='/js/newrelic.js'/> */}
                    <NewRelicBrowserAgent/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>

            </Html>
        )
    }
}

export default MyDocument;