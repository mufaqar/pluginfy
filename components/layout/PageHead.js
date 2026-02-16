import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Pluginey - Creative Agency HTML5 Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead