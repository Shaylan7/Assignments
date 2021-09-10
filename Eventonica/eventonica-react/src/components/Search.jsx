import React, { useState } from 'react';


export default function Search(props) {
    const [category, setCategory] = useState('');

    // need to have filterPost function in parent component. When submit button is cliked we will pass the 
    // data of the category to the parent component which will run the filterPost function. Focus on category first. 
    const filterPosts = (category) => {

        let val = category.toLowerCase();
        let matches = props.users.filter(v => v.category.toLowerCase().includes(val));
        props.showSearchedEvents(matches)
        // return posts.filter((post) => {
        //     const postName = post.category.toLowerCase();
        //     return postName.includes(query);
        // });
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
                    {/* <fieldset>
                        <label htmlFor="category-search">Category</label>
                        <input type="text" id="category-search" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </fieldset> */}
                    <fieldset>
                    <label for="categoryList">Category:</label>
                    <select onChange={(e) => setCategory(e.target.value)} name="categoryList" id="categoryList">
                        <option value="Family">Family</option>
                        <option value="Music">Music</option>
                    </select>
                    </fieldset>
                    <input type="submit" value="Search" />
                </form>
            </div>
        </aside>
    )
}