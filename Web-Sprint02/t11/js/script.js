function delSpace(str = ' ', space = ' ') {
    return ((str + ' ' + space).trim()).split(/\s+/);
}

function remSpace(arr) {
    return arr.filter((value, pos) => {
        return arr.indexOf(value) === pos;
    });
}

function addWords(obj, wrds) {
    if(obj) {
        let arr = delSpace(obj.words, wrds);
        obj.words = (remSpace(arr)).join(' ');
    }
}

function removeWords(obj, wrds) {
    if(obj) {
        let arr = remSpace(delSpace(obj.words));
        let arrOfWrds = remSpace(delSpace(wrds));
        
        arrOfWrds.forEach(pos => {
            if(arr.indexOf(pos) === -1)
                return 0;
            else
                arr.splice(arr.indexOf(pos), 1);
        });
        obj.words = arr.join(" ");
    }
}

function changeWords(obj, oldWrds, newWrds) {
    if(obj) {
        let arr = remSpace(delSpace(obj.words));
        let arrOldWrds = remSpace(delSpace(oldWrds));
        let arrNewWrds = remSpace(delSpace(newWrds));
        arrOldWrds.forEach(pos => {
            if(arr.indexOf(pos) === -1)
                return 0;
            else
                arr.splice(arr.indexOf(pos), 1);
        });
        obj.words = arr.concat(arrNewWrds).join(" ");
    }
}