import Head from 'next/head';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>網頁Title | Home</title>
                <meta name="keywords" content="Home" />
            </Head>
            <h1 className="text-2xl">Home</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nesciunt amet reprehenderit rerum!
                Distinctio illum neque architecto delectus vel quod velit culpa vitae, minima doloremque mollitia at
                voluptates obcaecati quas!
            </p>
        </>
    );
}
