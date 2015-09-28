var rc4js = require("./index.js");

var cipher = rc4js.createCipherByPassword("thisisrainx");
var txt = "PZd2";
var result = cipher.update(txt);


console.log("testing rc4\n---------------");
console.log("source text : " + txt);

console.log("encoded result: ");
prettyJSON(result);

console.log("restored result: ");
restore = cipher.update(result);
prettyJSON(restore.toString("binary"));


console.log("testing md5\n---------------");

console.log("source text : " + txt);

var hash = rc4js.md5(new Buffer(txt, "binary"));

console.log("result : " + hash.toString("hex"));

function prettyJSON(obj) {
        console.log(JSON.stringify(obj, null, 2));
}