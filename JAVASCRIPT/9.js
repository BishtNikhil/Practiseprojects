//Objects
let obj = {
    name:"John",
    age:21,
    fun : function(){
        return "I am Function";
},
arr:[10,20,30,40]
}

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.fun());
console.log(obj.arr);

// obj.key = "item";  // to add item in object
let a= "key2"         // alternate method
obj[a]="item 2";
console.log(obj);
