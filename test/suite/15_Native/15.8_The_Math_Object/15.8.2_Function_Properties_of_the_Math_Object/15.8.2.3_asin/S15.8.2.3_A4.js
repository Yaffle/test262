// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is +0, Math.asin(x) is +0
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.3_asin/S15.8.2.3_A4.js
 * @description Checking if Math.asin(+0) equals +0
 */

// CHECK#1
var x = +0;
if (Math.asin(x) !== +0)
{
	$ERROR("#1: 'var x = +0; Math.asin(x) !== +0'");
}
