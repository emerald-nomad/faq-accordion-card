import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/favicon-32x32.png"
                    />

                    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
                          rel="stylesheet"/>

                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument