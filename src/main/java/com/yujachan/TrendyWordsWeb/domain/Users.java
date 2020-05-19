package com.yujachan.TrendyWordsWeb.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class Users {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

//package com.yujachan.trendywords.DbClass;
//
//        import org.springframework.data.mongodb.core.mapping.Document;
//
//@Document(collection = "users")
//public class Users {
//    private String name;
//    private String email;
//    private String userid;
//    private String pw;
//
//    public String getName() {
//        return name;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public String getUserid() {
//        return userid;
//    }
//
//    public String getPw() {
//        return pw;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public void setUserid(String userid) {
//        this.userid = userid;
//    }
//
//    public void setPw(String pw) {
//        this.pw = pw;
//    }
//
//    @Override
//    public String toString() {
//        return "Users{" +
//                "name='" + name + '\'' +
//                ", email='" + email + '\'' +
//                ", userid='" + userid + '\'' +
//                ", pw='" + pw + '\'' +
//                '}';
//    }
//}
