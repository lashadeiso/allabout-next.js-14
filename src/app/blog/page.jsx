import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard post={post} />
      </div>
      <div className={styles.post}>
        <PostCard post={post} />
      </div>
      <div className={styles.post}>
        <PostCard post={post} />
      </div>
    </div>
  );
};

export default BlogPage;
