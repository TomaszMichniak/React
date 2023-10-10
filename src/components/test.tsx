import React, { useEffect, useState } from 'react';
import { Post } from '../types/postType';
import './test.css'
import { getPosts } from '../requests/postRequest';

export default function Test({id}: {id:number}) {

    const [posts,setPosts] = useState<Post[] | null>(null);
    useEffect(() => {
        (async () => {
            const data =  await getPosts();
            setPosts(data);
        })()
    },[])

    return (
        <div>
            {posts ? posts.map((post,index) => 
                <div key={index}>
                    <div className='a'>{post.title}</div>
                </div>
            ) : null}
        </div>
    )
}