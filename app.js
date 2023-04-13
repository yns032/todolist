let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer'); /* html deki idlere sahip elemanları alıyor */
let inputText = document.getElementById('inputText');
let clearToDo =document.getElementById('clearToDo');

addToDoButton.addEventListener('click', function(){/*addeventlistener ile üzerine geldigi zaman tıkladıgı zaman olayları sağlıyor*/
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-stylig'); /*cıktıların listesi ayarlıyor*/
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML=inputText.value;   /*innerHTML =p etiketi içindekini ekrana yazar*/
  inputText.value="";  /* kutunun içindekini alta yazmış kutu boş kalsın*/

    paragraph.addEventListener('click', function(){
     paragraph.style.textDecoration='line-through';  /*paragraf style ile ilgili ayar yapıyoruz*/
    });

    paragraph.addEventListener('dblclick' , function(){
      toDoContainer.removeChild(paragraph);   /*removeChild ile çift tıklayınca siliniyor*/
    });

    clearToDo.addEventListener('click' , function(){
        paragraph.remove();
    })
})
