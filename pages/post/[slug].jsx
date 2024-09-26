import React, { useEffect, useState } from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import { useRouter } from 'next/router';
import PostRepository from '~/repositories/PostRepository';
import ArticleDetail from '~/components/elements/articles/ArticleDetail';
import RelatedPosts from '~/components/partials/blog/RelatedPosts';
import FormPostComment from '~/components/shared/forms/FormPostComment';

const PostDetailPage = ({ query }) => {
    const router = useRouter();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getPost(slug) {
        const SPPost = await PostRepository.getPostBySlug(slug);
        if (SPPost) {
            setPost(SPPost);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
        return SPPost;
    }

    async function getProductOnChangeURL(url) {
        const nextPid = url.split('/').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            setLoading(true);
            await getPost(nextPid);
        }
    }

    useEffect(() => {
        const { slug } = query;
        if (query) {
            getPost(slug);
        }

        router.events.on('routeChangeStart', getProductOnChangeURL);
        return () => {
            router.events.off('routeChangeStart', getProductOnChangeURL);
        };
    }, []);
    let postDetailView;
    if (post) {
        postDetailView = <ArticleDetail post={post} />;
    }
    return (
        <ContainerPage title={post ? post.title : 'Post Detail'}>
            <div className="ps-page--default ps-page--blog">
                <div className="ps-blog">
                    <div className="container">
                        {postDetailView}
                        <RelatedPosts />
                        <FormPostComment />
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

PostDetailPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default PostDetailPage;
