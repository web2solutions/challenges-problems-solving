import React from 'react';

function Articles({articles}) {
    
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {articles.map((a) => (
                        <tr key={a.title} data-testid="article">
                            <td data-testid="article-title">{a.title}</td>
                            <td data-testid="article-upvotes">{a.upvotes}</td>
                            <td data-testid="article-date">{a.date}</td>
                        </tr>
                    ))}

                
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
