/**
 * Entry point for karma testing
 *
 * Created August 24th, 2019
 * @author: ywarezk
 * @version: 1.0.0
 * @copyright: Nerdeez Ltd
 */

import Router from "next/router";

declare let require: {context: (path: string, recursive: boolean, files: RegExp) => void};

const mockedRouter = { push: () => null, prefetch: () => null };
Router.router = mockedRouter as never;

function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context("./", true, /\.spec\.(tsx|ts)$/));
