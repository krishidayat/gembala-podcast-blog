# Podcast Blog - Jejaring Anak Muda Gereja

## 1. Project Overview

- **Nama Project:** Gembala Podcast - Podcast Blog untuk Anak Muda Gereja
- **Tipe:** Full-stack Web Application (Express.js + SQLite)
- **Fitur Utama:** Blog untuk podcast dengan embed Spotify & YouTube, backend admin untuk manage konten
- **Target User:** Anak muda gereja yang ingin berbagi dan mendengarkan podcast

## 2. Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** SQLite (better-sqlite3)
- **Frontend:** HTML + CSS + Vanilla JavaScript
- **Templating:** EJS

## 3. Struktur Folder

```
podcast-blog/
├── database/
│   └── init.sql
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   ├── post.ejs
│   └── admin/
│       ├── login.ejs
│       ├── dashboard.ejs
│       └── edit-post.ejs
├── routes/
│   ├── index.js
│   ├── api.js
│   └── admin.js
├── models/
│   └── database.js
├── package.json
└── server.js
```

## 4. Fitur

### Frontend (Public)
- **Homepage:** Daftar episode podcast terbaru
- **Post Detail:** Halaman episode dengan embed Spotify & YouTube
- **Kategori:** Filter episode berdasarkan kategori (Youth, Devosional, Testimoni, dll)
- **Tentang:** Halaman tentang jejaring

### Backend (Admin)
- **Login Admin:** Session-based authentication
- **Dashboard:** Statistik podcast (jumlah episode, total views)
- **CRUD Post:** Tambah, edit, hapus episode
- **Upload:** Gambar thumbnail untuk episode

### Embed Media
- **Spotify:** Embed podcast episode
- **YouTube:** Embed video podcast

## 5. Database Schema

### Table: posts
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key, auto increment |
| title | TEXT | Judul episode |
| slug | TEXT | URL-friendly slug |
| content | TEXT | Deskripsi/konten episode |
| spotify_embed | TEXT | Spotify embed code |
| youtube_embed | TEXT | YouTube embed code |
| thumbnail | TEXT | Path gambar thumbnail |
| category | TEXT | Kategori episode |
| status | TEXT | 'draft' atau 'published' |
| views | INTEGER | Jumlah views |
| created_at | DATETIME | Tanggal dibuat |
| updated_at | DATETIME | Tanggal diupdate |

### Table: admin
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key |
| username | TEXT | Username admin |
| password | TEXT | Password (hashed) |

## 6. API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | Get semua post (published) |
| GET | /api/posts/:slug | Get post by slug |
| POST | /api/admin/login | Login admin |
| GET | /api/admin/posts | Get semua post (including draft) |
| POST | /api/admin/posts | Create post |
| PUT | /api/admin/posts/:id | Update post |
| DELETE | /api/admin/posts/:id | Delete post |

## 7. Desain UI

### Color Palette
- **Primary:** #1E3A5F (Deep Blue - gereja)
- **Secondary:** #F4A261 (Orange - energi anak muda)
- **Accent:** #2A9D8F (Teal)
- **Background:** #FAFBFC
- **Text:** #2D3748

### Typography
- **Headings:** 'Poppins', sans-serif
- **Body:** 'Inter', sans-serif

### Layout
- **Header:** Logo + Navigation
- **Hero:** Welcome message dengan gambar
- **Grid:** 3 kolom untuk episode card
- **Footer:** Social links + copyright

## 8. Fitur Tambahan (Future)

- Comment system
- Search functionality
- Newsletter signup
- Social media sharing
