
//브라우저상에 모든 element(태그들,...)들이 모두 로딩 되고 난 후에
//실행시키고자 하는 함수를 전달한다

window.onload = function(){
    
    let cardTemplate =document.querySelector('#temp-card');
    // console.log(cardTemplate.innerHTML)
    //이렇게하면 템플릿태그는 제외하고
    //div태그부터 끝까지 가져온다

    // console.log(typeof html);
    let html = cardTemplate.innerHTML;
    //html은 실질적으로 추가하고자 하는 요소

    let li= document.createElement('li');
    li.innerHTML = html;
    // li.appendChild(html) html이 문자열이여서 못넣는다 appendchild는 노드만 가능

    //추가할 ul태그

    let ul = document.querySelector('.list');
    // ul.appendChild(li);
    // ul.appendChild(li);
    // ul.appendChild(li);
    // ul.appendChild(li);
    // ul.appendChild(li);

    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    // ul.appendChild(li.cloneNode(true));
    
    const data = request.getPostList(); //5개의 배열이 만들어 지지롱

    data.forEach(element=> {
        let newNode=li.cloneNode(true);//나중에 ul태그 자식으로 추가할 노드
        let temp=newNode.innerHTML; //li태그 안쪽에있는 문자열을 넣어줌 console.log(temp)
        temp=temp.replace('{pIcon}',element.pIcon);
        //문자열안에서 <div>~~~~ pIcon문자열을 찾아서 element(배열)의 Icon으로 바꾼것을 temp에 넣어줘 
        temp=temp.replace('{pTitle}',element.pTitle);
        temp=temp.replace('{pContent}',element.pContent);
        temp=temp.replace('{pImage}',element.pImage);
        temp=temp.replace('{pCompany}',element.pCompany);
        temp=temp.replace('{pText}',element.pText);
        temp=temp.replace('{pDetail}',element.pDetail);
        newNode.innerHTML=temp; //새롭게 만든 노드의 바꾼 문자열로 채운다

        ul.appendChild(newNode);

    });
}








