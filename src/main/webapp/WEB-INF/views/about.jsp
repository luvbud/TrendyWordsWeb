<%--
  Created by IntelliJ IDEA.
  User: young
  Date: 20. 3. 13.
  Time: 오후 7:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" isELIgnored="false"%>
<html>
<head>
    <title>Trendy Words !</title>
</head>
<body>
    <jsp:include page="menu.jsp"></jsp:include>
    <div id="content" style="text-align: center;">
        <h1>About</h1>
        <form action="/" method="post">
            <button type="submit" name="your_name" value="your_value">Go post</button>
        </form>
    </div>
</body>
</html>
