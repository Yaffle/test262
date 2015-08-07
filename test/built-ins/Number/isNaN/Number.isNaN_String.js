// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.4
author: Ryan Lewis
description: Number.IsNaN should return false if called with a String.
---*/

assert.sameValue(Number.isNaN('string'), false, 'Number.isNaN("string")');
