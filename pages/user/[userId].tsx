import axios from 'axios';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

type UserIdProps = {
    userInfo: InferGetStaticPropsType<typeof getStaticProps>; // 自動推導GetStaticProps return的值
};

const UserId: NextPage<UserIdProps> = (props) => {
    const { userInfo } = props;
    // const router = useRouter();
    // const { userId } = router.query;

    return (
        <>
            <Head>
                <title>網頁Title | User-{userInfo.id}</title>
                <meta name="keywords" content={`User-${userInfo.id}`} />
            </Head>
            <h1 className="text-2xl">UserName : {userInfo.name}</h1>
            <p>UserEmail : {userInfo.email}</p>
            <p>UserWebsite : {userInfo.website}</p>
        </>
    );
};

// 在建構時運行的涵式
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users').then((res) => res.data);
    const paths = data.map((v: any, i: number) => {
        return {
            params: { userId: v.id.toString() }, // 不確定型別是否為字串，所以轉成字串URL
        };
    });
    return {
        // 在建構時會先查看paths這個Array，它將會在指定的參數各構建一個頁面和路由
        // 若參數有10個就會有10個頁面和路由
        paths: paths, // [ {} , {} , { params : { userId : } } ]
        fallback: false, // 如果嘗試訪問不存在的id的路由，它將顯示404頁面
    };
};

// getStaticPaths的paths Array有幾筆就會跑幾次下列getStaticProps，build就將會產處幾個頁面
export const getStaticProps: GetStaticProps = async (ctx) => {
    const params: ParsedUrlQuery = ctx.params!;
    const { userId } = params;
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.data);
    return {
        props: {
            userInfo: data,
        },
    };
};

export default UserId;
