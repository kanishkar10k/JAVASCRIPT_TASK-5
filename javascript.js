var arr=[1,2,3,4,5];
var arr2=[6,7,8,9,0];
function join(){
    document.write("array 1: "+arr+"<br>");
    document.write("array 2: "+arr2+"<br>");
    let com=[...arr,...arr2];
    document.write("Combined array: "+arr+"<br>");
}

function del(pos){
    document.write("array 1: "+arr+"<br>");
    for(let i=pos+1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr.pop();
    document.write("array 1: "+arr+"<br>");
}
function insert(pos,ele){
    document.write(arr+'<br>');
    if(arr[pos]==null){
        arr[pos]=ele;
    }
    else{
    for(let i=(arr.length)-1;i>pos;i--){
        arr[i+1]=arr[i];
    }
    arr[pos]=ele;}
    document.write("After Inserting the element at the index["+pos+"]:"+arr);
}

function rotate(x){
    document.write(arr+'<br>');
    document.write("No of Rotations:"+x+'<br>');
    let rot=x%arr.length;
    for(let j=0;j<rot;j++){
    let safe=arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr[(arr.length)-1]=safe;
}
    document.write("After rotation:"+arr);
}

function arrayrange(start,end){
     let array=[];
     let j=0;
     for(let i=start;i<=end;i++){
        array[j]=i;
        j++;
     }
     document.write("["+array+"]");
}