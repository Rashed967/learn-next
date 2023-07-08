import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Layout from './components/layout'


export default function Contact(){
    return (
   
           <Layout>
            <Head>
            <title>contact page</title>
        </Head>
        <h1>Contact page</h1>
        <Link href="/">Homepage</Link>
        <Image
        src="/images/profile.jpg"
        width={250}
        height={300}
        alt='profle picture'
        />
        </Layout>
     
    )
}