import React, { useEffect } from 'react';
import { wrapper } from '../store/store';
import MasterLayout from '~/components/layouts/MasterLayout';
import { useRouter } from 'next/router';
import { CookiesProvider } from 'react-cookie';
import 'antd/dist/antd.compact.min.css';
import 'slick-carousel/slick/slick.css';
import '~/scss/style.scss';
import '~/scss/home-default.scss';
import '~/scss/home-boxed.scss';
import '~/scss/home-classic.scss';
import '~/scss/home-categories.scss';
import '~/scss/home-best-selling.scss';
import '~/scss/home-moderm.scss';
import '~/scss/home-simple.scss';
import '~/scss/supro-react.scss';
import { useDispatch } from 'react-redux';

function App({ Component, pageProps }) {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function () {
            document.getElementById('__next').classList.add('ps-loaded');
        }, 100);
    });

    const getLayout =
        Component.getLayout || ((page) => <MasterLayout children={page} />);
    return getLayout(
        <CookiesProvider>
            <Component {...pageProps} />
        </CookiesProvider>
    );
}

export default wrapper.withRedux(App);
