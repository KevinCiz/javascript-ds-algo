/*
    Given Object 
    {
        "client": "https", <required>
        "domain": "shopee.com.sg", <required>
        "item": "items/search",
        "queryParams": {
            "page": 1,
            "keyword": "iPhone"
        }
    }

    create a URL string with https://shopee.com.sg/item/search?page=1&keyword=iPhone

*/

// var params = {
//   client: "https",
//   domain: "shopee.com.sg",
//   item: "items/search",
//   queryParams: {
//     page: 1,
//     keyword: "iPhone",
//   },
// };

// var urlString = params.client + "://" + params.domain + "/" + params.item + "?";

// const keys = Object.keys(params.queryParams);
// const value = Object.values(params.queryParams);
// const entries = Object.entries(params.queryParams);
// console.log(keys);
// console.log(value);
// console.log(entries);

// for (const key of keys) {
//   console.log(key);
// }

// entries.map(
//   (entry, index) =>
//     (urlString = urlString + entry[0] + "=" + entry[1] + (index != entries.length - 1 ? "&" : ""))
// );

// console.log(urlString);

/*
    SHOPEE TEST MCQ
*/
var x = "test";
x[1] = "h";
console.log(x[1]);

const A = [];
A.push("a");
A[10] = "b";
A[10] = undefined;
A[5] = "c";

console.log(A.length);
