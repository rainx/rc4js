# rc4js

## Introduction

JavaScript Version RC4 Cipher

## Installation

```
npm install rc4js
```

## Usage

```javascript
var rc4js = require("rc4js");

 // Make cipher by password
 var cipher = rc4js.createCipherByPassword("thisisrainx");

 // or Make cipher by key 16 bytes length Buffer

 // var key = new Buffer("i_will_make_a_16");
 // var cipher = rc4js.createCipherByKey(key);


 // Text to encoding
 var txt = "PZd2";

 // get encrypt result
 var result = cipher.update(txt);
 console.log("Encrypt result is ");
 console.log(result);
 // > <Buffer bb 94 6a 9f>


 // Decrypt

 var decipher = rc4js.createCipherByPassword("thisisrainx");
 result = cipher.update(result);

 console.log("decrypt result is :");
 console.log(result.toString("binary"));
 // > PZd2
```

In ES6 way:

```javascript
 import * as rc4js from 'rc4js';

 // Make cipher by password
 const cipher = rc4js.createCipherByPassword("thisisrainx");

 // or Make cipher by key 16 bytes length Buffer

 // var key = new Buffer("i_will_make_a_16");
 // var cipher = rc4js.createCipherByKey(key);


 // Text to encoding
 const txt = "PZd2";

 // get encrypt result
 let result = cipher.update(txt);
 console.log("Encrypt result is ");
 console.log(result);
 // > <Buffer bb 94 6a 9f>


 // Decrypt

 const decipher = rc4js.createCipherByPassword("thisisrainx");
 result = cipher.update(result);

 console.log("decrypt result is :");
 console.log(result.toString("binary"));
 // > PZd2
```
