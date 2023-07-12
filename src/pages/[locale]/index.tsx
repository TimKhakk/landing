import {GetStaticPaths, GetStaticProps} from 'next';

import {Landing} from '../../components/Landing/Landing';
import {Layout} from '../../components/Layout/Layout';
import {getI18nPaths, getI18nProps} from '../../utils/i18next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            ...(await getI18nProps(ctx)),
        },
    };
};

const Home = () => {
    return (
        <Layout>
            <Landing />
        </Layout>
    );
};

export default Home;
