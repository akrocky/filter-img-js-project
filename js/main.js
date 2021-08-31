// const liItem = document.querySelectorAll('ul li');
// const imgItem = document.querySelectorAll('.products img');

// liItem.forEach(li => {
//     li.onclick = function () {

//         const value = li.textContent;
//         imgItem.forEach(img => {
//             img.style.display = 'none';
//             if (img.getAttribute('data-filter') == value || value =='All food') {
//                 img.style.display = 'block';
//             }
//         })
//     }
// })


const buttonList = document.getElementsByTagName('button')
const imgItem = document.querySelectorAll('.products img');

for ( const button of buttonList) {
    button.addEventListener('click', function () {
       
       let  eachButtonText = button.innerText;
        for ( const img of imgItem) {
            img.style.display = 'none';
            if (img.getAttribute('data-filter') == eachButtonText || eachButtonText=='All food'  ) {
                img.style.display = 'block';
            }


        }
    })
}
console.log(imgItem)