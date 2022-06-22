import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import AboutSection from "../../components/AboutSection/AboutSection";
import ConversationSection from "../../components/ConversationSection/ConversationSection";
import FooterSection from "../../components/FooterSection/FooterSection";
import GallerySection from "../../components/GallerySection/GallerySection";
import HeroSection from "../../components/HeroSection/HeroSection";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import {
  getComment,
  postComment,
  deleteComment,
  updateCommentLikes,
} from "../../util/api/homepage-fetchdata";
import "./HomePage.scss";

function HomePage() {
  const queryClient = useQueryClient();
  const { isLoading, data, refetch } = useQuery("comment", getComment);

  const handlePostComment = useMutation(postComment, {
    onSuccess: () => {
      refetch();
      queryClient.invalidateQueries("comment");
    },
  });

  const handleDeleteComment = useMutation(deleteComment, {
    onSuccess: () => {
      refetch();
      queryClient.invalidateQueries("comment");
    },
  });

  const handleUpdateCommentLike = useMutation(updateCommentLikes, {
    onSuccess: () => {
      refetch();
      queryClient.invalidateQueries("comment");
    },
  });

  return (
    <div>
      <header className="header">
        <NavBarComponent />
      </header>
      <main className="main-content">
        <div className="main-content__wrapper">
          <HeroSection />
          <AboutSection />
          <GallerySection />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ConversationSection
              comment={data}
              handleSubmit={handlePostComment}
              handleDeleteComment={handleDeleteComment}
              handleUpdateCommentLike={handleUpdateCommentLike}
            />
          )}
        </div>
      </main>
      <FooterSection />
    </div>
  );
}

export default HomePage;
