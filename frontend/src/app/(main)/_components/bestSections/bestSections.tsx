import Link from "next/link";

const BestsSections = () => {
  const sections = [
    {
      id: "bests",
      label: "بهترین ها",
      items: ["کتاب های برتر ماه", "کتاب های برتر سال", "کتاب های برتر ایران"],
    },
    {
      id: "bests-Literary",
      label: "بهترین‌های ادبی",
      items: ["رمان ها", "اشعار", "داستان کوتاه"],
    },
    {
      id: "bests-thematic",
      label: "بهترین‌های موضوعی",
      items: [
        "عاشقانه",
        "علمی تخیلی",
        "جنایی",
        "کودک و نوجوان",
        "تاریخی",
        "سفرنامه",
        "حماسی",
        "ماجراجویانه",
      ],
    },
  ];

  return (
    <section className="p-6 bg-gray-50">
      <div className="flex justify-center">
        {sections.map((section) => (
          <div key={section.id} className="w-1/6 px-4">
            <label htmlFor={section.id} className="block text-lg font-bold mb-4 text-center">
              {section.label}
            </label>
            <div id={section.id} className="flex flex-col gap-2 text-center">
              {section.items.map((item, index) => (
                <Link key={index} href="/">
                  <span className="text-gray-700 hover:text-blue-600">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestsSections;
