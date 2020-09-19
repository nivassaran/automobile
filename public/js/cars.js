var max = 2;

function changeImage(x){
    t = setInterval(function(){ change(x); }, 1200);
}

function closeInterval(x){
    clearInterval(t);
}

function change(x){
    var src = x.src;
    var patt1 = /.(?=\.jpeg)/;
    var result = src.match(patt1);  
    res = result[0] % max + 1;
    src = src.replace(/.(?=\.jpeg)/, res)
    x.src = src;
}
