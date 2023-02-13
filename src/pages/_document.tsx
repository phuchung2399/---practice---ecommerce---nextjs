import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { resetIdCounter } from "react-tabs";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    resetIdCounter();
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="selection:bg-[#fff700] selection:text-black">
          <Main />
          <div id="my-portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
