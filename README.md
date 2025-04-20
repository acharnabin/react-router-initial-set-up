

## ⚛️ React Router + Vite Starter (with Lazy Loading & Layouts)

A starter project built with **React**, **React Router v6+**, and **Vite**, featuring code-splitting via `React.lazy`, multiple layouts, and dynamic routing. Ideal for scalable production-grade SPA development.

---

### 🚀 Features

- ⚡ **Vite**: Fast bundling and hot-reloading
- 🧭 **React Router v6**: Client-side routing
- 💤 **React.lazy & Suspense**: Code-splitting for better performance
- 🧱 **Nested Routes & Layouts**: Clean structure with `DashboardLayout` & `AuthLayout`
- 🧪 **404 Route Handling**: Graceful fallback for undefined routes
- 🛒 Example of a dynamic product route: `/product/:id`

---

### 📦 Installation

```bash
git clone https://github.com/acharnabin/react-router-initial-set-up
cd react-router-initial-set-up
npm install
npm run dev
```

---

### 📁 Project Structure

```
src/
├── layout/
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── ProductPage.tsx
│   └── auth/
│       └── Login.tsx
│   └── dashboard/
│       ├── Dashbord.tsx
│       └── Setting.tsx
├── App.tsx
├── main.tsx
└── App.css
```

---

### 🌐 Routing Overview

```tsx
<BrowserRouter>
  <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      {/* Public Routes */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* Dynamic Product Route */}
      <Route path="product">
        <Route path=":id" element={<ProductPage />} />
      </Route>

      {/* Dashboard Routes with Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashbord />} />
        <Route path="settings" element={<Setting />} />
      </Route>

      {/* Auth Routes with Layout */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* 404 Fallback */}
      <Route path="*" element={<h1>404 NO ROUTE FOUND</h1>} />
    </Routes>
  </Suspense>
</BrowserRouter>
```



### 🧑‍💻 Author

**Nabin Achar**  
🔗 [https://thechotoprogrammer.vercel.app/](https://thechotoprogrammer.vercel.app/)  




