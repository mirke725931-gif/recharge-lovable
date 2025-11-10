package com.recharge.backend.movie.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/movie-posts")
@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:3000"})
public class MoviePostController {

    // GET /recharge/api/movie-posts?page=1&size=16
    @GetMapping
    public List<Map<String, Object>> listMoviePosts(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "16") int size
    ) {
        return List.of(
                Map.of(
                        "postId", 1,
                        "title", "가을에 어울리는 감성 영화 추천 🍂",
                        "userId", "junho_dev",
                        "movie", Map.of(
                                "poster", "https://image.tmdb.org/t/p/w185/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                        )
                ),
                Map.of(
                        "postId", 2,
                        "title", "주말에 보기 좋은 코미디 영화",
                        "userId", "sanga",
                        "movie", Map.of(
                                "poster", "https://image.tmdb.org/t/p/w185/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
                        )
                )
        );
    }
}
