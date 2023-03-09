import { NextPage } from 'next';
import { Layout } from '~/components/layouts';

class PageErrorProps {
    statusCode? = 404;
    message? = '没有找到该页面';
}

const PageError: NextPage<PageErrorProps> = props => {
    const { statusCode, message } = {
        ...props,
        ...new PageErrorProps()
    };
    return (
        <Layout.Default>
            <div className="page-error">
                <span>{statusCode}</span>
                <span>{message}</span>
            </div>
        </Layout.Default>
    );
};

PageError.getInitialProps = ({ res, err }) => {
    const statusCode = res?.statusCode || err?.statusCode || 404;
    return { statusCode };
};

export default PageError;
