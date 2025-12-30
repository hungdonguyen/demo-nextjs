import { useTranslations } from "next-intl";

export default function ReponsivePage() {
  const t = useTranslations('responsive');

  return (
    <div className="p-10 space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">{t('lesson1.title')}</h2>
        <p>{t('lesson1.description')}</p>
        <div
          className="
          w-full h-32 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg
          bg-red-500        
          md:bg-yellow-500  
          lg:bg-green-500   
        "
        >
          <span className="block md:hidden">{t('lesson1.mobile')}</span>
          <span className="hidden md:block lg:hidden">
            {t('lesson1.tablet')}
          </span>
          <span className="hidden lg:block">{t('lesson1.desktop')}</span>
        </div>
      </div>
      {/* BÀI 2: LAYOUT LƯỚI */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">{t('lesson2.title')}</h2>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-40 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border-2 border-slate-300"
            >
              {t('lesson2.item')} {item}
            </div>
          ))}
        </div>
      </div>

      {/* BÀI 3: ẨN HIỆN NỘI DUNG */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">{t('lesson3.title')}</h2>

        <div className="flex gap-4 border p-4 rounded-xl">
          {/* Ảnh Avatar: Chỉ hiện trên Tablet trở lên */}
          <div className="hidden md:block w-20 h-20 bg-blue-200 rounded-full flex-shrink-0"></div>

          <div>
            <h3 className="font-bold text-lg">{t('lesson3.name')}</h3>
            <p className="text-gray-600">
              {t('lesson3.description')}
            </p>
          </div>
        </div>
      </div>

      {/* BÀI 4: CHỮ CO GIÃN */}
      <div className="space-y-4 border-t pt-4">
        <h2 className="text-xl font-bold">{t('lesson4.title')}</h2>
        
        <div className="bg-slate-100 p-6 rounded-xl">
          <h1 className="font-extrabold text-blue-600 
            text-2xl        
            md:text-4xl     
            lg:text-6xl     
          ">
            {t('lesson4.heading')}
          </h1>
          
          <p className="mt-2 text-slate-600
            text-sm         
            md:text-base    
            lg:text-lg      
          ">
            {t('lesson4.description')}
          </p>
        </div>
      </div>

      {/* BÀI 5: FLEX WRAP (TỰ XUỐNG DÒNG) */}
      <div className="space-y-4 border-t pt-4">
        <h2 className="text-xl font-bold">{t('lesson5.title')}</h2>
        <p>{t('lesson5.description')}</p>
        
        <div className="flex flex-wrap gap-2">
          {[
            "ReactJS", "Next.js", "Tailwind CSS", "TypeScript", 
            "Node.js", "Prisma", "PostgreSQL", "MongoDB",
            "Docker", "Kubernetes", "AWS", "Google Cloud"
          ].map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
