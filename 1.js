function load () {
    var array = [3, 56, 58, 333, 546];
    var ol = document.createElement('ol');
    var parentElem = document.getElementById('div');

    parentElem.appendChild(ol);

    var list = function (x) {
        if (typeof array == 'object') {
            var createList = array.map(function (item) {
                var li = document.createElement('li');
                li.innerHTML = item;
                li.setAttribute('value', item);
                // y.appendChild(li);
                return x.appendChild(li);
            })
        }else {
            alert('Not array');
        }
    }
    list(ol);
}

module.exports.list = function (x) {
    if (typeof array == 'object') {
        var createList = array.map(function (item) {
            var li = document.createElement('li');
            li.innerHTML = item;
            li.setAttribute('value', item);
            // y.appendChild(li);
            return x.appendChild(li);
        })
    }else {
        alert('Not array');
    }
}








