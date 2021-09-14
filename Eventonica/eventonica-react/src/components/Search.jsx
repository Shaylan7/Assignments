import React, { useState } from 'react';


export default function Search() {
    const [category, setCategory] = useState('');

   

    const filterPosts = (posts, query) => {
        if (!query) {
            return posts;
        }

        return posts.filter((post) => {
            const postName = post.name.toLowerCase();
            return postName.includes(query);
        });
    };

    return (
        <aside className="search-toolbar">
            <div>
                <h3>Find Events</h3>
                <form id="search" action="#" onSubmit={filterPosts}>
                    <fieldset>
                        <label htmlFor="date-search">Date</label>
                        <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="category-search">Category</label>
                        <select value={category} onChange={handleChange}>
                            <option value="music">Music</option>
                            <option value="family">Family</option>
                            <option value="education">Education</option>
                            <option value="social justice">Social Justice</option>
                        </select>
                        <input type="text" id="category-search" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </fieldset>

                    <input type="submit" value="Search" />
                </form>
            </div>
        </aside>
    )
}