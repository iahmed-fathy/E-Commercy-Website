<div dir="rtl">

# متجر إلكتروني — E-Commerce

![Next.js](https://img.shields.io/badge/Next.js-15.5-black) ![TypeScript](https://img.shields.io/badge/TypeScript-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC)

## نبذة عن المشروع

واجهة متجر إلكتروني أمامية متقدمة مبنية بـ **Next.js (App Router)** و **Tailwind CSS**، منظمة كمكونات قابلة لإعادة الاستخدام مع دعم تعدد اللغات عبر **next-intl**. المشروع مصمم لعرض المنتجات والعروض والفئات بطريقة احترافية وقابلة للتوسيع.

## المزايا الرئيسية

✨ **الأداء السريع** - استخدام Next.js مع تحسينات SSR و SSG  
🌐 **تعدد اللغات** - دعم كامل للعربية والإنجليزية  
📱 **التجاوب التام** - متوافق مع جميع الأجهزة  
🛒 **تجربة تسوق متكاملة** - سلة تسوق، قائمة المفضلة، إدارة الحساب  
🔒 **الأمان** - نظام مصادقة متقدم

## التقنيات المستخدمة

- **Frontend**: Next.js 15.5, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Internationalization**: next-intl
- **State Management**: Redux Toolkit
- **UI Components**: Swiper, lucide-react, react-icons
- **Backend (اختياري)**: Firebase

## الميزات المتقدمة

- 🔍 **البحث الذكي** - بحث متطور في المنتجات
- 🏷️ **الفئات الديناميكية** - تصفح حسب الفئات
- ⭐ **الأكثر مبيعاً** - عرض المنتجات الشائعة
- 💰 **العروض الخاصة** - قسم Flash Sales

## هيكل الملفات

```
src/
├── app/
│   └── [locale]/
│       ├── page.tsx          # الصفحة الرئيسية
│       └── layout.tsx        # تخطيط عام مع دعم الترجمة
├── components/               # المكونات القابلة لإعادة الاستخدام
├── i18n/                    # إعدادات الترجمة
├── locales/
│   ├── ar/                  # ملفات الترجمة العربية
│   └── en/                  # ملفات الترجمة الإنجليزية
└── screenshots/             # صور المشروع
```

## التشغيل المحلي

1. **تثبيت التبعيات:**

```bash
npm install
```

2. **تشغيل بيئة التطوير:**

```bash
npm run dev
```

3. **الوصول للموقع:**

```
http://localhost:3000
```

## البناء للإنتاج

```bash
npm run build
npm start
```

## لقطات الشاشة

### الصفحة الرئيسية

![الصفحة الرئيسية بالعربية](screenshots/Home-Page-ar.png)
![الصفحة الرئيسية بالإنجليزية](screenshots/Home-Page-en.png)

### صفحات المنتجات

![صفحة منتجاتنا](screenshots/Our-Products-Page.png)
![صفحة الفئات](screenshots/Categories-Page.png)
![تفاصيل المنتج](screenshots/Details-Page.png)

### إدارة التسوق

![صفحة السلة](screenshots/Cart-Page.png)
![صفحة الدفع](screenshots/Check-Out-Page.png)
![قائمة المفضلة](screenshots/wishList-Page.png)

### صفحات المستخدم

![تسجيل الدخول](screenshots/Sign-In.png)
![التسجيل](screenshots/Sign-Up.png)
![إدارة الحساب](screenshots/Manage-My-Account.png)

### واجهات أخرى

![عن الموقع](screenshots/About.png)
![اتصل بنا](screenshots/Conact-us.png)
![صفحة البحث](screenshots/Search-Page.png)
![القائمة الجانبية](screenshots/SideNav.png)

### التجاوب

![الهاتف المحمول](screenshots/Mobile.png)
![الجهاز اللوحي](screenshots/Tablet.png)

---

<div dir="ltr">

**Made with ❤️ by <a href="https://www.linkedin.com/in/iahmedfathy/">Ahmed Fathy</a>**

</div>

</div>
