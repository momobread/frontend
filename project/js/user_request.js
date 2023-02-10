//DB로부너 받아온 회원들의 정보들이 들어있다고 가정

//회원가입할때 8개의 감ㅅ을 입력했을 것이다
//그렇다면 DB에는 회원 한 명당 8개의 값이 저장되어 있을 것이다
//회원 한 명 8개의 값을 한번에 담아줄 User 객체(생성자)를 정의
function User(lastName,firstName,email,pw,birthYear,birthMonth,birthDate,gender){

        this.lastName=lastName; //성
        this.firstName= firstName;//이름
        this.email=email;//id
        this.pw=pw;//비밀번호
        this.birthYear=birthYear;//생년
        this.birthMonth=birthMonth;//생월
        this.birthDate=birthDate;//생일
        this.gender=gender;//성별

}
//이미 회원가입하 사람들의 정보(데이터베이스에서 가져오는 부분) 
const userList = [ //더미데이터
    new User('홍','길동','test1@naver.com','1234',2020,5,4,2),//여성 1 남성 2
    new User('박','영희','test2@naver.com','abc1111',2005,5,1,1),
    new User('박','시은','si990819@naver.com','5555',2023,1,1,-1)
];

const request = { //객체
    login : function(email,pw){
        //id : 로그인 할때 입력한 id (회원가입때 입력한거 아님)
        //pw : 로그인 할때 입력한 pw (회원가입때 입력한거 아님)

        //회원가입할때 입략된 아이디,비밀번호는 userList 속의 User객체들 속에 들어있다

        for(u of userList){
            //첫번째 반복때 u : 홍길동이 회원가입할때 입력했던 8개의 값이 모여있는 USer객체
            //두번째 반복때 u : 박영희이 회원가입할때 입력했던 8개의 값이 모여있는 USer객체
            //세번째 반복때 u : 박시은이 회원가입할때 입력했던 8개의 값이 모여있는 USer객체
        
            if(email === u.email && pw === u.pw) {
                return true
            } //입력한 아이디가 첫번째 방의 이메일랑 같나>
                
        }
        return false;
    },

    regist : function(u){ //매개변수로 User객체(8개의 값이 들어있는)를 받아와서
        userList.push(u) //배열 추가시 push 씀

    }

};

