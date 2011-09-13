// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If P's characters do not have the form Pattern, then throw a SyntaxError exception
 *
 * @section 15.10.4.1
 * @path 15_Native/15.10_RegExp_Objects/15.10.4_The_RegExp_Constructor/S15.10.4.1_A9_T1.js
 * @description Pattern is "??"
 */

//CHECK#1
try {
	$ERROR('#1.1: new RegExp("??") throw SyntaxError. Actual: ' + (new RegExp("??")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("??") throw SyntaxError. Actual: ' + (e));
	}
}

