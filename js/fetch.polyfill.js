// Fetch polyfill for older browsers
(function (global) {
    'use strict';

    if (global.fetch) {
        return;
    }

    function normalizeName(name) {
        if (typeof name !== 'string') {
            name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name');
        }
        return name.toLowerCase();
    }

    function normalizeValue(value) {
        if (typeof value !== 'string') {
            value = String(value);
        }
        return value;
    }

    global.fetch = function (input, init) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.open(init && init.method || 'GET', input);

            if (init && init.headers) {
                Object.keys(init.headers).forEach(function (key) {
                    xhr.setRequestHeader(normalizeName(key), normalizeValue(init.headers[key]));
                });
            }

            xhr.onload = function () {
                resolve({
                    ok: xhr.status >= 200 && xhr.status < 300,
                    status: xhr.status,
                    statusText: xhr.statusText,
                    json: function () {
                        return Promise.resolve(JSON.parse(xhr.responseText));
                    },
                    text: function () {
                        return Promise.resolve(xhr.responseText);
                    }
                });
            };

            xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
            };

            xhr.send(init && init.body || null);
        });
    };
})(typeof self !== 'undefined' ? self : this);