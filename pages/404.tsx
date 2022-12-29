import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        const pushHome = setTimeout(() => {
            router.back();
            // router.push('/'); // 頁面導向
        }, 3000);

        return () => clearTimeout(pushHome);
    }, []);
    return (
        <>
            <Head>
                <title>網頁Title | 404</title>
                <meta name="keywords" content="404" />
            </Head>
            <h1 className="text-2xl">Ooops</h1>
            <h2 className="text-xl">NotFound</h2>
            <p>
                Go back to <Link href="/">HomePage</Link>
            </p>
        </>
    );
};

export default NotFound;
