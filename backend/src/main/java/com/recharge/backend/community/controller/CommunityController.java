package com.recharge.backend.community.controller;

import com.recharge.backend.community.service.CommunityService;
import com.recharge.backend.community.vo.CommunityVO;
import com.recharge.backend.community.dao.CommunityDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.util.List;

@RestController
@RequestMapping("/api/community")
@CrossOrigin(origins = "http://localhost:3000") // React 허용
public class CommunityController {

    @Autowired
    private CommunityDAO communityDAO;

    @Autowired
    private CommunityService communityService;

    // ✅ 전체 게시글 조회
    @GetMapping
    public List<CommunityVO> getAll() {
        return communityDAO.getCommunityList();
    }

    // ✅ 단일 게시글 조회
    @GetMapping("/{id}")
    public CommunityVO get(@PathVariable("id") Long id) {
        return communityDAO.getCommunityPost(id);
    }

    // ✅ 게시글 등록
    @PostMapping
    public String insert(
            @RequestParam("userId") String userId,
            @RequestParam("communityTitle") String communityTitle,
            @RequestParam("communityContent") String communityContent,
            @RequestParam("communityTab") String communityTab,
            @RequestParam(value = "communityImage", required = false) MultipartFile communityImage
    ) {
        CommunityVO post = new CommunityVO();
        post.setUserId(userId);
        post.setCommunityTitle(communityTitle);
        post.setCommunityContent(communityContent);
        post.setCommunityTab(communityTab);
        post.setCreateId(userId);
        post.setUpdatedId(userId);

        if (communityImage != null && !communityImage.isEmpty()) {
            try {

                String uploadDir = "C:/upload/";
                File dir = new File(uploadDir);
                if (!dir.exists()) dir.mkdirs();

                String filename = System.currentTimeMillis() + "_" + communityImage.getOriginalFilename();
                String filePath = uploadDir +filename;
                communityImage.transferTo(new File(filePath));

                // DB에는 상대 URL로 저장 (React에서 접근 가능)
                post.setCommunityImagePath("/upload/" + filename);
                post.setCommunityImageName(filename);

            } catch (Exception e) {
                e.printStackTrace();
                return "이미지 업로드 실패";
            }
        }

       try {

           communityService.insertCommunityPost(post);
       } catch (Exception e) {
           e.printStackTrace();
           return "게시글 등록 실패 : " + e.getMessage();
       }
       return "success";
    }

    // ✅ 게시글 수정
    @PutMapping("/{id}")
    public String update(@PathVariable("id") Long id, @RequestBody CommunityVO post) {
        post.setCommunityPostId(id);
        communityDAO.updateCommunityPost(post);
        return "updated";
    }

    // ✅ 게시글 삭제
    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        communityDAO.deleteCommunityPost(id);
        return "deleted";
    }

      //좋아요 증가
    @PostMapping("/{id}/like")
    public ResponseEntity<String> likePost(@PathVariable Long id) {
        communityService.likePost(id);
        return ResponseEntity.ok("좋아요 완료");
    }


    // 조회수 증가
    @PostMapping("/{id}/view")
    public ResponseEntity<String> increaseViewCount(@PathVariable Long id) {
        try {
            communityService.increaseViewCount(id);
            return ResponseEntity.ok("조회수 증가 완료");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("조회수 증가 실패");
        }
    }

}
