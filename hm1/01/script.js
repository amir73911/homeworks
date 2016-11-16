var ar = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];

function consoleRec(ar){
    recIndexes(ar, 0);

    function recIndexes(ar, index){
        console.log(ar[index]);
        if(++index < ar.length) recIndexes(ar, index);
    }
}

consoleRec(ar);