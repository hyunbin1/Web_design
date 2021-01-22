$(document).ready(function () {
    // click했을때, control안에 a태그가 이벤트를 발생시킨다. 
    $(document).on("click", ".control nav a", function (event) {

        //url은 바뀌는데 실제 페이지로는 가지 않게 한다. - 기존 url을 사용자가 클릭한 링크로 바꾼다.
        history.pushState(null, null, event.target.href);
        // 클릭한 웹페이지의 내용을 article에 담아 변화시켜준다. 
        // 웹브라우저는 기본적으로 동작하기로 되어 있는 것을 막는다 - 페이지가 이동하지 않는다.
        event.preventDefault();

    });

});