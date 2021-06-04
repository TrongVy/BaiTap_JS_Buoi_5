function getElm(elm){
    return Number(document.getElementById(elm).value);
}
function diemUuTien(a,b){
  return a +b;
}
function sum() {
    var x =getElm('monThiThuNhat');
    var y =getElm('monThiThuHai');
    var z =getElm('monThiCuoi');
    return x+y+z;
}
text.style.display = 'none';
btn.addEventListener('click', function(){ 
     var x = diemUuTien( getElm('doiTuong') , getElm('khuVuc') );
     var y = sum();
     var z =x+y;
     var diemChuan =getElm('diemChuan');
     showDiemTong.innerHTML ='Điểm Tổng: ' + z;
     if(z < diemChuan){     
        ketQua.innerHTML ='Không Trúng Tuyển !';
     } else{
        ketQua.innerHTML ='Trúng Tuyển !';
     }   
    text.style.display = 'block';
})

//bài 2 tính tiền điện:
function tinhTien(){
    var sum;
    if(getElm('kw')<= 50){
      sum =500*getElm('kw');
      
    }else if(50<getElm('kw') && getElm('kw')<100){
       sum =650*getElm('kw')
    } else if(100<getElm('kw') &&getElm('kw')<200){
        sum = 850*getElm('kw');
    } else{
        sum = 1300*getElm('kw');
    }
    showText.innerHTML = 'số tiền phải trả: '+ sum +" vnđ";
}
show.style.display = 'none';
btnKW.addEventListener('click', function(){
    show.style.display = 'block';
    tinhTien();
})