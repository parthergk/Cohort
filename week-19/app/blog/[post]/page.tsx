"use client";
import React, { useEffect, useState } from "react";

interface Prop {
  params: Promise<{
    post: string;
  }>;
}

const Page: React.FC<Prop> = ({ params }) => {
  const [post, setPost] = useState<string | null>(null);
  
  useEffect(() => {
    params.then((resolvedParams) => {
      setPost(resolvedParams.post);
      console.log("Resolved params:", resolvedParams.post);
    });
  }, [params]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return <div>{`Post: ${post}`}</div>;
};

export default Page;
