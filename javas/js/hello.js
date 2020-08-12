console.log("hello welcome to the world");
//button with id content
let myBtn = document.getElementById("myBtn");
// div with id content 
let content = document.getElementById("content");

// function getData(){
  //  console.log("Started getData")
    // url = "astha.txt";
     //fetch(url).then((response)=>{
       //  console.log("Inside first then")
         //return response.text();
         //}).then((data)=>{
         //console.log("Inside second then")
         //console.log(data);
     //})
 //}

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json(); //parse
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}


//function postData(){
  //  url = "http://dummy.restapiexample.com/api/v1/create"; //fakereq.
    //data = '{"name":"test12334","salary":"123","age":"23"}'
    //params = {
      //  method:'post',
        //headers: {
          //  'Content-Type': 'application/json'
        //},
        //body: data
    //}
    //fetch(url, params).then(response=> response.json())
    //.then(data => console.log(data)
    //)
//}
 console.log("Before running getData")
 getData()
 console.log("After running getData")
//postData()

