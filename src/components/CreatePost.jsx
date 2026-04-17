import { useState } from 'react';

function CreatePost({ onAddPost }) {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.content.trim()) {
            alert('Please fill in both title and content!');
            return;
        }

        const newPost = {
            id: Date.now(),
            title: formData.title,
            excerpt: formData.content,
            author: "You",
            date: new Date().toDateString(),
            likes: 0
        };

        onAddPost(newPost);
        setFormData({ title: '', content: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Post title..."
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Write your post..."
                    rows="4"
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <button type="submit">
                Publish Post
            </button>
        </form>
    );
}

export default CreatePost;