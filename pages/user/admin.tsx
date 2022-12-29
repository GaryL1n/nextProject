import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type AdminProps = {
    allUserInfo: InferGetStaticPropsType<typeof getStaticProps>; // 自動推導GetStaticProps return的值
};

const Admin: NextPage<AdminProps> = (props) => {
    const { allUserInfo } = props;
    return (
        <>
            <Head>
                <title>網頁Title | Admin</title>
                <meta name="keywords" content="Admin" />
            </Head>
            <h1 className="text-2xl">All User</h1>
            <ul>
                {allUserInfo.map((v: any, i: any) => (
                    <li key={v.id}>
                        <Link href={`/user/${v.id}`}>
                            <h3>{v.name}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

// 永遠不會只在建構時在瀏覽器中運行 所以不要寫希望在瀏覽器中運行的代碼
export const getStaticProps: GetStaticProps = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users').then((res) => res.data);

    return {
        props: {
            allUserInfo: data,
        },
    };
};

export default Admin;
