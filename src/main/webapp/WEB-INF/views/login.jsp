<%--
  Created by IntelliJ IDEA.
  User: young
  Date: 20. 4. 4.
  Time: 오후 4:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Trendy Words !</title>
</head>
<body>
    <jsp:include page="menu.jsp"></jsp:include>
    <div id="content" style="text-align: center;">
        <h1>Sign in</h1>
        <form action="" method="post">
            ID: <input type="" name="userid" value=""><br/>
            PW: <input type="password" name="pw" value=""><br/>
<%--            <input type="image" src="submit.png" alt="Submit Button">--%>
            <button>Sign in</button>
<%--            <button type="submit" >Go post</button>--%>
        </form>
    </div>
    <div id="content" style="text-align: center;">
        <h1>Sign up</h1>
        <form action="/" method="post">
            Name: <input type="text" name="name" value=""><br/>
            E-mail: <input type="email" name="email" value=""><br/>
            ID: <input type="text" name="userid" value=""><br/>
            PW: <input type="password" name="pw" value=""><br/>
<%--            <input type="image" src="submit.png" alt="Submit Button">--%>
            <button type="submit" onclick="alert('회원가입이 완료되었습니다.')">Sign up</button>
<%--            <button type="submit" >Go post</button>--%>
        </form>
    </div>
</body>
</html>
