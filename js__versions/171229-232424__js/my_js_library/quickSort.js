function quickSort(array){
    	var average = getAverage(array);
    	var dividedLists = getLessThanAndGreaterThanOrEqualToAverage(average, array);

    	// It's possible that some lists are now sorted, or only contain
        // many instances of one number:
    	dividedLists = ifListsAreStillNotSorted_ThenSortThem(dividedLists);

        return combineAll(dividedLists);
    }


	function getAverage(array){
		for (var i=0, total=0; i < array.length;  ++i){
			total += array[i];
		}
		return (total / array.length);
	}


	function getLessThanAndGreaterThanOrEqualToAverage(average, array){
		for (var i=0, lessThan=[], greaterThanOrEqualTo=[];
			 i < array.length; ++i){
			if (array[i] < average){
				lessThan.push(array[i]);
			}
			else{
				greaterThanOrEqualTo.push(array[i]);
			}
		}
		return [lessThan, greaterThanOrEqualTo];
	}


    function ifListsAreStillNotSorted_ThenSortThem(lists){
    	for (var i=0; i < lists.length; ++i){
			if (listIsStillNotSorted(lists[i])){
				lists[i] = quickSort(lists[i]);
			}
        }
        return lists;
    }


	function listIsStillNotSorted(list){
		var i=0;
		while((typeof list[i + 1]) !== 'undefined'){
			if (list[i] > list[i + 1]){
				return true;
			}
			++i;
		}

		return false;
	}


	function combineAll(arrays){
    	for (var i = 0, newArray=[]; i < arrays.length; ++i){
			newArray = newArray.concat(arrays[i]);
        }
        return newArray;
    }
