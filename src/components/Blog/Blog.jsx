import { useEffect, useMemo, useState } from "react";

import { Request } from "../../utils/Request";
import { BlogItem } from "./BlogItem/BlogItem";


export const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        Request.get('https://jsonplaceholder.typicode.com/posts').then(res => setBlogData(res));
    }, []);
    
    const filteredByUser = useMemo(() => blogData.filter(({userId}) => userId === 2), [blogData]);
    
    return <div className="blog">
       {filteredByUser.map(item => <BlogItem key={item.id} {...item}></BlogItem>)}
    </div>
};