import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface Post {
    id: number;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    readTime: string;
    featured?: boolean;
}

const emptyPost: Post = {
    id: 0,
    category: '',
    date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
    title: '',
    excerpt: '',
    content: '',
    image: '',
    readTime: '5 min',
    featured: false
};

export default function AdminApp() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching posts:", err);
                setLoading(false);
            });
    }, []);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPost) return;

        let updatedPosts;
        if (isNew) {
            const maxId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) : 0;
            updatedPosts = [{ ...editingPost, id: maxId + 1 }, ...posts];
        } else {
            updatedPosts = posts.map(p => p.id === editingPost.id ? editingPost : p);
        }

        // Solo puede haber un destacado
        if (editingPost.featured) {
            updatedPosts = updatedPosts.map(p => p.id === editingPost.id ? p : { ...p, featured: false });
        }

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedPosts, null, 2),
            });
            if (!res.ok) throw new Error("Error al guardar");

            setPosts(updatedPosts);
            setEditingPost(null);
            setIsNew(false);
            alert("Post guardado correctamente.");
        } catch (e) {
            alert("Hubo un error al guardar el post.");
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("¿Seguro que quieres borrar este post?")) return;
        const updatedPosts = posts.filter(p => p.id !== id);
        try {
            await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedPosts, null, 2),
            });
            setPosts(updatedPosts);
        } catch (e) {
            alert("Hubo un error al borrar el post.");
        }
    };

    if (loading) return <div className="p-10 text-center">Cargando posts locales...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Insignia Local CMS</h1>
                        <p className="text-gray-500 text-sm mt-1">Modo Desarrollo - Los cambios se guardarán en data/posts.json</p>
                    </div>
                    <button
                        onClick={() => { setEditingPost({ ...emptyPost }); setIsNew(true); }}
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition"
                    >
                        <Plus size={20} /> Nuevo Post
                    </button>
                </div>

                {editingPost ? (
                    <form onSubmit={handleSave} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b">
                            <h2 className="text-2xl font-bold">{isNew ? 'Redactar Nuevo Post' : 'Editar Post'}</h2>
                            <button type="button" onClick={() => setEditingPost(null)} className="text-gray-400 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                                <input required type="text" className="w-full border rounded-lg px-4 py-2" value={editingPost.title} onChange={e => setEditingPost({ ...editingPost, title: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                                <input required type="text" className="w-full border rounded-lg px-4 py-2" value={editingPost.category} onChange={e => setEditingPost({ ...editingPost, category: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha (ej: 15 Oct 2023)</label>
                                <input required type="text" className="w-full border rounded-lg px-4 py-2" value={editingPost.date} onChange={e => setEditingPost({ ...editingPost, date: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo de Lectura (ej: 5 min)</label>
                                <input required type="text" className="w-full border rounded-lg px-4 py-2" value={editingPost.readTime} onChange={e => setEditingPost({ ...editingPost, readTime: e.target.value })} />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">URL de Imagen (Unsplash, etc.)</label>
                                <input required type="url" className="w-full border rounded-lg px-4 py-2" value={editingPost.image} onChange={e => setEditingPost({ ...editingPost, image: e.target.value })} />
                            </div>
                            <div className="md:col-span-2 flex items-center gap-3">
                                <input type="checkbox" id="featured" checked={editingPost.featured} onChange={e => setEditingPost({ ...editingPost, featured: e.target.checked })} className="w-5 h-5 rounded border-gray-300 text-primary" />
                                <label htmlFor="featured" className="font-medium">Marcar como Post Destacado Principal</label>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Extracto (Resumen corto)</label>
                                <textarea required rows={2} className="w-full border rounded-lg px-4 py-2" value={editingPost.excerpt} onChange={e => setEditingPost({ ...editingPost, excerpt: e.target.value })}></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Contenido Principal (Párrafos separados por salto de línea)</label>
                                <textarea required rows={8} className="w-full border rounded-lg px-4 py-2" value={editingPost.content} onChange={e => setEditingPost({ ...editingPost, content: e.target.value })}></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-8 pt-4 border-t">
                            <button type="button" onClick={() => setEditingPost(null)} className="px-6 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100">Cancelar</button>
                            <button type="submit" className="bg-primary text-white px-8 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-secondary">
                                <Save size={20} /> Guardar
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map(post => (
                            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                                <div className="h-40 relative">
                                    <img src={post.image} alt="Cover" className="w-full h-full object-cover" />
                                    {post.featured && (
                                        <span className="absolute top-3 left-3 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">DESTACADO</span>
                                    )}
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-gray-400">{post.category}</span>
                                        <span className="text-xs text-gray-400">{post.date}</span>
                                    </div>
                                    <h3 className="font-bold text-lg leading-tight mb-2 flex-1">{post.title}</h3>
                                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                        <button onClick={() => { setEditingPost(post); setIsNew(false); }} className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium">
                                            <Edit2 size={16} /> Editar
                                        </button>
                                        <button onClick={() => handleDelete(post.id)} className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium">
                                            <Trash2 size={16} /> Borrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
