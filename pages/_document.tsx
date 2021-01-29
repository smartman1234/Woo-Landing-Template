import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
