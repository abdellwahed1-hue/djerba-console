"use client";

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'maintenance' | 'controllers' | 'consoles'>('maintenance');

  const galleryItems = [
    {
      title: "تنظيف مروحة وصيانة جهاز PS4",
      desc: "إنهاء مشكلة الصوت العالي والحرارة الناتجة عن تراكم الأتربة الكثيفة.",
      before: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=400",
      after: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "تغيير منفذ HDMI لجهاز PS5",
      desc: "لحام احترافي دقيق لمنفذ أصلي مدعم بالكامل بعد تعرض القديم للكسر.",
      before: "https://images.unsplash.com/photo-1622244154627-724d5c573c8e?auto=format&fit=crop&q=80&w=400",
      after: "https://images.unsplash.com/photo-1622244154627-724d5c573c8e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-brand-light text-brand-dark scroll-smooth" dir="rtl">
      
      {/* شريط التنقل العلوي (Navbar) */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-black text-brand-primary">
            Djerba<span className="text-brand-accent">Console</span>
          </div>
          <nav className="hidden md:flex space-x-reverse space-x-8 font-medium text-gray-600">
            <a href="#services" className="hover:text-brand-primary transition">الخدمات</a>
            <a href="#pricing" className="hover:text-brand-primary transition">الأسعار</a>
            <a href="#gallery" className="hover:text-brand-primary transition">قبل / بعد</a>
            <a href="#contact" className="hover:text-brand-primary transition">اتصل بنا</a>
          </nav>
          <a 
            href="https://wa.me/21625469993" 
            target="_blank" 
            className="bg-status-success hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-bold shadow-xs transition text-sm"
          >
            واتساب مباشر 💬
          </a>
        </div>
      </header>

      {/* الواجهة الرئيسية (Hero Section) */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-blue-50 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold mb-4">
            المركز الأول لإصلاح وصيانة الكونسول في جزيرة جربة 🛠️
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
            إصلاح احترافي لأجهزة <span className="text-brand-primary">PlayStation</span> وجميع منصات الألعاب
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            صيانة دقيقة وسريعة بأحدث المعدات لجميع أنواع أجهزة التحكم وأجهزة الكونسول في جربة. أسعار شفافة وتعامُل مباشر.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/21625469993"
              target="_blank"
              className="bg-brand-primary hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition"
            >
              إصلاح جهازي الآن
            </a>
            <a 
              href="#pricing"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl border border-gray-300 transition"
            >
              رؤية قائمة الأسعار الشفافة
            </a>
          </div>
        </div>
      </section>

      {/* قسم استعراض الخدمات السريع (Services Preview) */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">خدماتنا الاحترافية</h2>
          <p className="text-gray-500 mt-2 text-sm">حلول متكاملة لكافة الأعطال لمنصات وأجهزة الجيل الحالي والسابق</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="text-lg font-bold mb-2">أجهزة الكونسول</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              صيانة شاملة وتغيير المكونات المتضررة، مع معالجة مشاكل الحرارة والصوت العالي بأفضل الخامات العالمية.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="text-3xl mb-3">🕹️</div>
            <h3 className="text-lg font-bold mb-2">أجهزة التحكم (Controllers)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              إصلاح متكامل لمشاكل الانجراف (Drift) عبر ترقية عصا التحكم لتقنيات الجيل الثاني المقاومة للأعطال كلياً.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-lg font-bold mb-2">التنظيف والألعاب</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              خدمات تنظيف عميقة باستعمال معجون حراري فائق الجودة، بالإضافة لتجهيز الألعاب لكافة منصات البلايستيشن.
            </p>
          </div>
        </div>
      </section>

      {/* قسم الأسعار */}
      <section id="pricing" className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">قائمة الأسعار الشفافة</h2>
            <p className="text-gray-500 mt-2 text-sm">أسعار واضحة بالدينار التونسي ومنافسة بدون تكاليف مخفية</p>
          </div>

          <div className="flex justify-center mb-8 bg-white p-1.5 rounded-xl shadow-xs max-w-md mx-auto border border-gray-200">
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`w-full py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                activeTab === 'maintenance' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              الصيانة والتنظيف
            </button>
            <button
              onClick={() => setActiveTab('controllers')}
              className={`w-full py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                activeTab === 'controllers' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              أجهزة التحكم
            </button>
            <button
              onClick={() => setActiveTab('consoles')}
              className={`w-full py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                activeTab === 'consoles' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              تنصيب الألعاب
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
            
            {activeTab === 'maintenance' && (
              <div className="divide-y divide-gray-100">
                <div className="p-4 sm:p-6 flex justify-between items-center bg-gray-50/50">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">تنظيف واستبدال معجون حراري (Arctic MX-4)</span>
                  <span className="font-bold text-brand-primary text-sm sm:text-base">السعر</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">جهاز بلايستيشن 3 (PS3)</h4>
                    <p className="text-gray-500 text-xs mt-0.5">تنظيف داخلي كامل مع تطبيق معجون حراري أصلي</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">35 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">جهاز بلايستيشن 4 (PS4)</h4>
                    <p className="text-gray-500 text-xs mt-0.5">حل مشكلة صوت المروحة والحرارة الزائدة</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">25 DT</span>
                </div>
              </div>
            )}

            {activeTab === 'controllers' && (
              <div className="divide-y divide-gray-100">
                <div className="p-4 sm:p-6 flex justify-between items-center bg-gray-50/50">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">قطع غيار وإصلاح اليدين</span>
                  <span className="font-bold text-brand-primary text-sm sm:text-base">السعر</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">استبدال حساس جديد (Potentiometer)</h4>
                    <p className="text-gray-500 text-xs mt-0.5">حل مشاكل الانحراف البسيطة والتقطيع في التوجيه</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">12 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">استبدال الأنالوق كامل (Analog Stick)</h4>
                    <p className="text-gray-500 text-xs mt-0.5">تغيير كامل لقطعة الميكانيك الداخلية للأنالوق</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">20 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">استبدال أنالوق Hall Effect (مضاد للانحراف)</h4>
                    <p className="text-gray-500 text-xs mt-0.5">تقنية الحساسات المغناطيسية لمنع ظهور الانجراف مستقبلاً</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">30 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">أنالوق Hall Effect TMR (مضاد للانحراف - الجيل الثاني)</h4>
                    <p className="text-gray-500 text-xs mt-0.5">أحدث تقنية لأعلى دقة استجابة وعمر افتراضي طويل جداً</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">35 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">استبدال الأزرار</h4>
                    <p className="text-gray-500 text-xs mt-0.5">حل مشاكل عدم الاستجابة أو الأزرار العالقة</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">12 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">تغيير منفذ الشحن</h4>
                    <p className="text-gray-500 text-xs mt-0.5">إصلاح مشاكل عدم شحن اليد أو التوصيل بالـ USB</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">20 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">غطاء أنالوق (Capuchon) عدد 2</h4>
                    <p className="text-gray-500 text-xs mt-0.5">تغيير الأغطية البلاستيكية الخارجية المتآكلة للأنالوق</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">12 DT</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">اللوحة الشريطية (Ribbon Circuit Board)</h4>
                    <p className="text-gray-500 text-xs mt-0.5">استبدال شريط التوصيل الداخلي للأزرار والـ Flex</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">20 DT</span>
                </div>
              </div>
            )}

            {activeTab === 'consoles' && (
              <div className="divide-y divide-gray-100">
                <div className="p-4 sm:p-6 flex justify-between items-center bg-gray-50/50">
                  <span className="font-bold text-gray-900 text-sm sm:text-base">تنصيب وتثبيت الألعاب</span>
                  <span className="font-bold text-brand-primary text-sm sm:text-base">السعر للعبة الواحدة</span>
                </div>
                <div className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50/50 transition">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">تنصيب ألعاب بلايستيشن 3، 4، 5</h4>
                    <p className="text-gray-500 text-xs mt-0.5">مجموعة واسعة من أحدث وأقوى عناوين الألعاب المفضلة</p>
                  </div>
                  <span className="font-black text-gray-900 text-sm sm:text-base">5 DT</span>
                </div>
              </div>
            )}

          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-xs">
              * ملاحظة: نضمن لك استخدام قطع غيار أصلية وخامات تبريد ممتازة لأجهزتك لضمان استقرار أدائها الطويل في جربة.
            </p>
          </div>
        </div>
      </section>

      {/* قسم معرض الأعمال */}
      <section id="gallery" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">جودة العمل (قبل / بعد)</h2>
          <p className="text-gray-500 mt-2 text-sm">شاهد كفاءة ونظافة عمليات الإصلاح والصيانة داخل مركزنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 overflow-hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs mb-4">{item.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative group">
                  <div className="absolute top-2 right-2 bg-status-danger text-white px-2 py-0.5 rounded text-[10px] font-bold z-10">قبل الصيانة</div>
                  <img src={item.before} alt="قبل الإصلاح" className="rounded-xl w-full h-48 object-cover filter grayscale-30" />
                </div>
                <div className="relative group">
                  <div className="absolute top-2 right-2 bg-status-success text-white px-2 py-0.5 rounded text-[10px] font-bold z-10">بعد الصيانة ✨</div>
                  <img src={item.after} alt="بعد الإصلاح" className="rounded-xl w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم الاتصال */}
      <section id="contact" className="py-16 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div>
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider block mb-2">تواصل معنا اليوم</span>
              <h2 className="text-3xl font-black mb-6">مرحباً بك في مركز صيانة جربة كونسول</h2>
              
              <div className="space-y-6 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <h4 className="font-bold text-white text-base">الموقع الجغرافي</h4>
                    <p className="mt-1">جربة، تونس (نوفر الخدمة لكافة المناطق: حومة السوق، ميدون، سدويكش، آجيم)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">🕒</span>
                  <div>
                    <h4 className="font-bold text-white text-base">أوقات العمل</h4>
                    <p className="mt-1">كامل أيام الأسبوع </p>
                    <p className="text-xs text-gray-400 mt-0.5">من الساعة 09:00 صباحاً حتى الساعة 08:00 مساءً</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">📱</span>
                  <div>
                    <h4 className="font-bold text-white text-base">الهاتف المباشر والواتساب</h4>
                    <p className="mt-1 font-bold text-lg text-brand-accent inline-block" style={{ direction: 'ltr' }}>
                      <a href="tel:+21625469993" className="hover:underline tracking-wide">
                        +216 25 469 993
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <a 
                  href="https://wa.me/21625469993" 
                  target="_blank" 
                  className="bg-status-success hover:bg-emerald-600 text-white inline-flex px-6 py-3 rounded-xl font-bold transition items-center gap-2 text-sm"
                >
                  💬 ارسل رسالة واتساب مباشرة الآن
                </a>
              </div>
            </div>

            {/* الخريطة المقترحة */}
            <div className="bg-gray-800 rounded-2xl p-2 border border-gray-700 overflow-hidden shadow-xl h-64 sm:h-80 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391.392416792354!2d10.921664296358948!3d33.74250259767829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabf094b879a8f%3A0x4cc6bc7da88767c3!2sR%C3%A9paration%20Playstation%20Djerba!5e1!3m2!1sen!2stn!4v1783352672324!5m2!1sen!2stn" 
                className="w-full h-full rounded-xl border-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} DjerbaConsole. جميع الحقوق محفوظة. صيانة احترافية لمنصات الألعاب في جربة.</p>
          </div>
        </div>
      </section>

    </div>
  );
}