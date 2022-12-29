import { NextPage } from 'next';
import Head from 'next/head';

const User: NextPage = () => {
    return (
        <>
            <Head>
                <title>網頁Title | Mall</title>
                <meta name="keywords" content="User" />
            </Head>
            <h1 className="text-2xl">User</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nesciunt amet reprehenderit rerum!
                Distinctio illum neque architecto delectus vel quod velit culpa vitae, minima doloremque mollitia at
                voluptates obcaecati quas!
            </p>
        </>
    );
};

export default User;
