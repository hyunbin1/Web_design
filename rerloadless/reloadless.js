$(document).ready(function () {
    // click했을때, control안에 a태그가 이벤트를 발생시킨다. 
    $(document).on("click", ".control nav a", function (event) {

        //url은 바뀌는데 실제 페이지로는 가지 않게 한다. - 기존 url을 사용자가 클릭한 링크로 바꾼다.
        history.pushState(null, null, event.target.href);
        // 클릭한 웹페이지의 내용을 현재 웹페이지의 article에 담아 변화시켜준다. 
        // 하지만 이렇게 하면 불러들인 페이지의 모든 내용을 가져오게 된다. $("article").load(event.target.href); -> 따라서 뒤에 article을 추가해준다. 하지만 article만 추가해줬을 경우에 article태그가 중복되어 나타날 수도 있다. 
        // 따라서 우리는 article 안에 content라는 class를 만들어 article의 중복을 피해준다. 
        $("article").load(event.target.href + 'article>.content');
        // 웹브라우저는 기본적으로 동작하기로 되어 있는 것을 막는다 - 페이지가 이동하지 않는다.
        event.preventDefault();

    })
    /* history.pushState는 클릭을 했을때 다음 url로 넘어가게 해주는 것이였다. 
    따라서 뒤로가기 버튼을 눌렀을때도 인터넷 브라우져와 서로 통신을 할 수 있어야 된다.
    */
    $(window).on('popstate', function (event) {
        $('article').load(location.href + " article>.content");
    });
    let audio = new Audio("IU 내 손을 잡아.mp3");
    $(document).on("click", ".control .player .play", function (event) {
        audio.play();
    });
    $(document).on("click", ".control .player .pause", function (event) {
        audio.pause();
    });
});