<%--
  Created by IntelliJ IDEA.
  User: young
  Date: 20. 3. 13.
  Time: 오후 7:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Trendy Words !</title>
    <link rel="stylesheet" href="/static/css/style.css"/>
</head>
<body>
    <jsp:include page="menu.jsp"></jsp:include>

    <div id="header">
        <h1>Trendy Words</h1>
        <h3>시사 단어</h3>

        <form action="/trendy-words" method="post">
            <button type="submit" name="your_name" value="your_value">학습하기</button>
        </form>
    </div>
    <div id="content">
        <jsp:include page="submenu.jsp"></jsp:include>
        <div class="words-box">
<%--    일별로 단어 정렬 가능하게하기 --%>
<%--    순위 숫자 매기기 --%>
            <c:forEach items="${tw}" var="tw" varStatus="i">
                <div class='word' id='word-${i}' onmouseover="mouse_event(this)" onmouseout="mouse_event(this)" onclick="location.href = '/learn/${tw.word}'">
                    <div class='word-eng'>
                        <h3>${tw.word}</h3>
                        <p>${tw.sentence}</p>
                    </div>
                    <div class='word-mean'>
                        <h3>${tw.meaning}</h3>
                        <p>${tw.smeaning}</p>
                    </div>
                    <div class='word-icon'>
                        <img id='icon-1' alt='icon-1' src='/static/images/speaker.png' style='margin: 5px' width='30px' height='30px'>
                        <img id='icon-2' alt='icon-2' src='/static/images/art.png' style='margin: 5px' width='30px' height='30px'>
                    </div>
                </div>
            </c:forEach>
            <script>
                function mouse_event(box) {
                    box.onmouseover = function () {
                        this.style.backgroundColor = "#ECFFB8";
                    }
                    box.onmouseout = function () {
                        this.style.backgroundColor = "";
                    }
                }
                function add_event(){

                }
            </script>
            <div id="add">
                <h2><a href="javascript:add_event();">View More</a></h2>
            </div>
        </div>
    </div>
</body>
</html>
