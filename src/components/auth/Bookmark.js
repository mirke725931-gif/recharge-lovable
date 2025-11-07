import React from "react";
import '../../css/auth/Bookmark.css';
import { Star } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

function Bookmark() {

    return(
        <div className="Bookmark_main">
            <div className="Bookmark_title">
                <h2>내가 찜한 콘텐츠</h2>
            </div>


            {/*카테고리 탭*/}
            <Tabs defaultValue="movie" className="Bookmark_box" >
                <TabsList className="Bookmark_category">
                    <TabsTrigger value="movie" className="Bookmark_category_btn1">
                    Movie() 

                    </TabsTrigger>
                    <TabsTrigger value="music" className="Bookmark_category_btn2">
                    Music() 
                    </TabsTrigger>
                </TabsList>


            {/*Movies Tab Content*/}
            <TabsContent value="movie">
                <div className="Bookmark_list_container">
                    <div className="Bookmark_list_card">
                        <div className="Bookmark_img">
                            <p>포스터</p>
                        </div>
                        <button className="Bookmark_like_btn">
                            <Star className="star" />
                        </button>
                        <div className="Bookmark_movie_title">                        
                        </div>
                    </div>
                    <div className="Bookmark_list_card">
                        <div className="Bookmark_img">
                            <p>포스터</p>
                        </div>
                        <button className="Bookmark_like_btn">
                            <Star className="star" />
                        </button>
                        <div className="Bookmark_movie_title">                        
                        </div>
                    </div>
                    <div className="Bookmark_list_card">
                        <div className="Bookmark_img">
                            <p>포스터</p>
                        </div>
                        <button className="Bookmark_like_btn">
                            <Star className="star" />
                        </button>
                        <div className="Bookmark_movie_title">                        
                        </div>
                    </div>
                    <div className="Bookmark_list_card">
                        <div className="Bookmark_img">
                            <p>포스터</p>
                        </div>
                        <button className="Bookmark_like_btn">
                            <Star className="star" />
                        </button>
                        <div className="Bookmark_movie_title">                        
                        </div>
                    </div>
                    <div className="Bookmark_list_card">
                        <div className="Bookmark_img">
                            <p>포스터</p>
                        </div>
                        <button className="Bookmark_like_btn">
                            <Star className="star" />
                        </button>
                        <div className="Bookmark_movie_title">                        
                        </div>
                    </div>
                    <div className="Bookmark_list_card">
                        <div className="Bookmark_img">
                            <p>포스터</p>
                        </div>
                        <button className="Bookmark_like_btn">
                            <Star className="star" />
                        </button>
                        <div className="Bookmark_movie_title">
                            영화제목                        
                        </div>
                    </div>        
                </div>
            </TabsContent>
            {/*Music Tab Content*/}
            <TabsContent value="music">
                <div className="Bookmark_list_container">
                    <div className="Bookmark_list_card_music">
                        <div className="Bookmark_img_music">
                            <p>포스터</p>
                        </div>
                        <button className="Bookmark_like_btn_music">
                            <Star className="star" />
                        </button>
                        <div className="Bookmark_movie_title">  
                             ssds                      
                        </div>                    
                    </div>        
                </div>
            </TabsContent>





            </Tabs>
        </div>

    );
}
export default Bookmark; 

