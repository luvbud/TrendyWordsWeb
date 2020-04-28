package com.yujachan.trendywords.Controller;

import com.yujachan.trendywords.DbClass.TrendyWords;

import com.yujachan.trendywords.DbRepository.TrendyWordsRepository;
import com.yujachan.trendywords.DbTemplate.TrendyWordsTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Date;

@RestController
public class TrendyWordsController {

//    @PostMapping("/")
//    public ResponseEntity<String> ip (HttpServletRequest request){
//        return ResponseEntity.ok(request.getRemoteAddr());
//    }



    @GetMapping("/index")
    public String index() {
        //return "index";
        return "안녕하세요 현재 서버시간은 " + new Date() + "입니다.\n";
    }


//    @PostMapping("/")
//    public String postindex() {
//        return "postindex";
//    }
//    TrendyWordsTemplate trendyWordsTemplate;
//    TrendyWordsRepository trendyWordsRepository;
//    @GetMapping("/about")
//    public String about() {
//        return "about";
//    }
//
//    @GetMapping("/trendy-words")
//    public String trendyWords(Model model) {
//        List<TrendyWords> tw = trendyWordsTemplate.findAll();
//        model.addAttribute("tw", tw);
//        return "trendy-words";
//    }
//
//    @GetMapping("/find")
//    public String redirectLearn(Model model){
//        List<TrendyWords> result = trendyWordsTemplate.findAll();
//        TrendyWords tw = result.get(0);
//        model.addAttribute("tw", tw);
//        return "redirect:/learn/" + tw.getWord();
//    }
//
//    // TODO: group URL 설정 헷갈림 back, next 구현해야 함, POST 매핑 오류 - 3/28 커밋 내용
//
//    @GetMapping("/find/{group}")
//    public String redirectLearn(@PathVariable("group") String group, RedirectAttributes model){
//        List<TrendyWords> result = trendyWordsRepository.findByGroup(group);
//        TrendyWords tw = result.get(0);
//        model.addAttribute("tw", tw);
//        model.addAttribute("idx", 0);
//        return "redirect:/learn/" + tw.getWord();
//    }
//
//    @PostMapping("/find/{group}/{index}")
//    public String nextLearn(@PathVariable("group") String group, @PathVariable("index") int index, RedirectAttributes model){
//        List<TrendyWords> result = trendyWordsRepository.findByGroup(group);
//        TrendyWords tw = result.get(index);
//        model.addAttribute("tw", tw);
//        model.addAttribute("idx", index);
//        return "redirect:/learn/" + tw.getWord();
//    }
//
//    @GetMapping("/trendy-words/{word}")
//    public String detail(@PathVariable("word") String word, Model model){
//        List<TrendyWords> tw = trendyWordsRepository.findByGroup(word);
//        model.addAttribute("tw", tw);
//        return "detail";
//    }
//
//    @GetMapping("/learn/{word}")
//    public String learn(@PathVariable("word") String word, Model model){
//        TrendyWords tw = trendyWordsRepository.findByName(word);
//        model.addAttribute("tw", tw);
//        return "learn";
//    }
//
//    @PostMapping("/trendy-words")
//    public String learn() { return "learn"; }
//
//    @GetMapping("/difficult-words")
//    public String difficultWords() {
//        return "difficult-words";
//    }

}