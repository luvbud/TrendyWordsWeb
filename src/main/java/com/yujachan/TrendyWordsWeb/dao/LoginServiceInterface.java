package com.yujachan.TrendyWordsWeb.dao;

import com.yujachan.TrendyWordsWeb.model.LogInfo;
import org.json.simple.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import javax.servlet.http.HttpSession;

public interface LoginServiceInterface {
    ResponseEntity<?> doLogin(HttpSession session, LogInfo logInfo);
    ResponseEntity<?> doLogout(HttpSession session, Model model);
    JSONObject getLogInfo(HttpSession session);
}
