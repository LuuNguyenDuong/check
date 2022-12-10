// Câu 1: Viết một function có tên là findEven(number) với number là một số bất kỳ trong khoảng từ 4-20. Khi chạy findEven() sẽ đưa ra tất cả các số chẵn trong khoảng từ 4 đến number.
let ar=[];
    function findEven(n) {
        
        for (let i = 4; i<n ; i++) {
        if (i%2==0) {
            console.log(i)
            
        }
    }  
}
findEven(18)

// Câu 2: Bên phía HTML hãy tạo một thẻ div có màu bất kỳ. Hãy viết một đoạn code thực hiện chức năng khi di chuột vào thẻ div sẽ chuyển màu, khi di chuột ra sẽ trở về màu cũ.

// Câu 3:  Viết một function có tên numberOneTriangle() khi chạy function này, trên màn hình sẽ đưa ra hình sau: 

function umberOneTriangle(n) {
    let text =[];
    for (let i=1 ; i<=n ; i++) {
       
            text += 1;
            console.log(text)
        
    }
}
umberOneTriangle(5)
//document.getElementsByClassName("random").innerHTML = umberOneTriangle();
