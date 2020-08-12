//async /await
console.log("welcom back");

async function test(){
    console.log('Inside test function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "test";
}

console.log("Before calling test")
let a = harry();
console.log("After calling test")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")