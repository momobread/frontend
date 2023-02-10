function login(){
    const email=document.querySelector('#email');
    const pw=document.querySelector('#pass');

    
        //console.log(email.value);
        //console.log(pw.value);
        //console.log(!'')
        //email.value가 입력되지 않았다면


    if(!email.value ||!pw.value ){//email.value === '' //email.value가 비어있어 => false, 그것의 ! => true //if 문 실행
        alert('아이디와 비밀번호는 필수입력 값입니다');
        return;
        }




    if(request.login(email.value,pw.value)){
        //로그인성공 위의 결과가 true가 된다면
        //main 페이지로 이동 (window객체 사용 => location)
        console.log(window.location.href);
        window.location.href='./02_facebook_main.html';
        return;
    }
    //로그인실패

    alert('아이디 또는 비밀번호가 틀렸습니다');
   email.value='';//값이 비워진다
   pw.value='';//값이 비워진다

}
