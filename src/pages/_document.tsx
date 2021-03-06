import Document,{Html, Head,Main, NextScript} from 'next/document'

export default class MyComponent extends Document {
    render() {
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="/image/rocket2.png"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
