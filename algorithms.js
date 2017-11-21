
//Array must be already sorted when using binary search.
function binarySearch(array,value){
  var low = 0;
  var high = array.length-1;
  var mid = 0;
  while(low <= high){
    mid = Math.floor(array.length/2);
    if(array[mid] === value){
      return value;
    }else if(array[mid] < value){
      low = mid +1;
    }else{
      high = mid-1;
    }
  }
  return -1;
}
