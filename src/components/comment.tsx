

'use client';


import { useState, useEffect } from "react";

const CommentSection = () => {
const [comment, setComment] = useState("");
const [comments, setComments] = useState<string[]>([]);

useEffect(() => {
const storedComments = localStorage.getItem('comments');
if (storedComments) {
try {
const parsedComments = JSON.parse(storedComments);
setComments(parsedComments);
} catch (error) {
console.error('Error parsing comments from local storage:', error);
// Optionally, reset local storage if parsing fails:
// localStorage.removeItem('comments');
}
}
}, []);

useEffect(() => {
localStorage.setItem('comments', JSON.stringify(comments));
}, [comments]);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

if (comment.trim()) {
setComments([comment, ...comments]);
setComment("");
}
};

return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6 border-2 border-gray-200 border-opacity-60  " id="comment1">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Add A Comment </h2>
        
        <form onSubmit={handleSubmit} className="mb-4 ">
            <textarea
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none
            focus:ring-2 focus:ring-blue-500"
            placeholder="Write a comment..."/>
            <button
            type="submit"
            className="mt-2 w-full p-2 bg-green-600 text-white rounded-md  border-2
            focus:outline-none">
                Submit Comment
                </button>
                </form>
                
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Comments:</h3>
                    <div className="space-y-4">
                        {comments.length > 0 ?(
                            comments.map((comment, index)=>(
                                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                                    <p>{comment}</p>
                                    </div>
                            ))
                        ) : (
                            <p className="border-2 text-gray-400 p-4">No comment yet.Be the first to comment!</p>
                        )}
                        </div>
                        </div>
                        </div>
);
};

export default CommentSection
