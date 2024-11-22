"use client";

import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../core/redux/store.jsx";
import AllRoutes from "../Router/router.jsx";

const App = () => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
                <link rel="stylesheet" href="/style/css/feather.css" />
                <link rel="stylesheet" href="/style/css/line-awesome.min.css" />
                <link rel="stylesheet" href="/style/scss/main.scss" />
                <link rel="stylesheet" href="/style/icons/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="/style/icons/fontawesome/css/all.min.css" />
            </Head>
            <Provider store={store}>
                <AllRoutes />
            </Provider>
        </>
    );
};

export default App;