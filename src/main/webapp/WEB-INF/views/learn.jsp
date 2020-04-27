<%--
  Created by IntelliJ IDEA.
  User: young
  Date: 20. 3. 14.
  Time: 오전 3:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Trendy Words !</title>
    <link rel="stylesheet" href="/static/css/learn.css">
</head>
<body>
    <div id="header">
        <h1>학습하기</h1>
        <form action="/trendy-words" method="get">
            <button type="submit" name="your_name" value="your_value">돌아가기</button>
        </form>
    </div>
    <div id="content">
        <jsp:include page="learn-submenu.jsp"></jsp:include>

        <div class="learn-box">
            <div class="backWord">
                <form action="/find/${tw.group}/${idx}-1" method="POST">
                    <button type="submit">back </button>
                </form>
            </div>
<%--            <c:forEach items="${tw}" var="tw">--%>
                <div class="word1">

<%--                    <div class='word' id='word-${i}' onmouseover="mouse_event(this)" onmouseout="mouse_event(this)" onclick="location.href = '/trendy-words/${tw.word}'">--%>

<%--                        <div class='word-eng'>--%>
                            <h3>${tw.word}</h3>
                            <p>${tw.sentence}</p>
<%--                        </div>--%>
<%--                        <div class='word-mean'>--%>
                            <h3>${tw.meaning}</h3>
                            <p>${tw.smeaning}</p>
<%--                        </div>--%>
<%--                        <div class='word-icon'>--%>
                            <img id='icon-1' alt='icon-1' src='/static/images/speaker.png' style='margin: 5px' width='30px' height='30px'>
                            <img id='icon-2' alt='icon-2' src='/static/images/art.png' style='margin: 5px' width='30px' height='30px'>
<%--                        </div>--%>
                    </div>
<%--                </c:forEach>--%>
<%--                <h1>사진</h1>--%>
<%--                <p>${tw.word}</p>--%>
<%--                <p>뜻</p>--%>
<%--                <p>예문</p>--%>
<%--                <p>뜻</p>--%>
<%--                <p>발음듣기</p>--%>
<%--                <p>녹음하기</p>--%>
<%--                <p>결과</p>--%>
<%--            </div>--%>
            <div class="nextWord">
                <form action="/find/${tw.group}/${idx}" method="POST">
                    <button type="submit">next</button>
                </form>
            </div>
        </div>
    </div>

</body>
</html>
