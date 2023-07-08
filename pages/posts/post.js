import Link from 'next/link'

export default function FirstPost(){
    return (
        <>
        <h1>First Post</h1>
        <h3><Link href="/">Back to homepage</Link></h3>
        </>
    )
}