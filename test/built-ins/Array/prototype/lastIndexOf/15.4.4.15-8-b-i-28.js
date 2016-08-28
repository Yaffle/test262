// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-28
description: >
    Array.prototype.lastIndexOf - side-effects are visible in
    subsequent iterations on an Array
---*/

        var preIterVisible = false;
        var arr = [];

        Object.defineProperty(arr, "2", {
            get: function () {
                preIterVisible = true;
                return false;
            },
            configurable: true
        });

        Object.defineProperty(arr, "1", {
            get: function () {
                if (preIterVisible) {
                    return true;
                } else {
                    return false;
                }
            },
            configurable: true
        });

assert.sameValue(arr.lastIndexOf(true), 1, 'arr.lastIndexOf(true)');
