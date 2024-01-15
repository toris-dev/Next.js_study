import Link from "next/link";
import React from "react";
import CreatePost from "./CreatePost";

async function getPosts() {
  const res = await fetch(
    // static data Fetching
    "http://127.0.0.1:8090/api/collections/posts/records",
    { cache: "no-cache" } // refresh on every request 캐시가 안되게 하고 모든 리퀘스트마다 다시 가져올 수 있게한다. (getServerSideProps 와 유사!!)
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
      <CreatePost />
    </div>
  );
}

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <h3>{title}</h3>
        <p>{created}</p>
        <br />
      </div>
    </Link>
  );
};
