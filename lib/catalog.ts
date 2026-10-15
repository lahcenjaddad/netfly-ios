export type Title = {
  id: string
  name: string
  image: string
  year: number
  rating: string
  duration: string
  match: number
  genres: string[]
  type: 'Movie' | 'Series'
  description: string
}

export const typeLabel: Record<Title['type'], string> = {
  Movie: 'فيلم',
  Series: 'مسلسل',
}

export const SAMPLE_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

export const featured: Title = {
  id: 'red-horizon',
  name: 'الأفق الأحمر',
  image: '/images/hero.png',
  year: 2026,
  rating: '+13',
  duration: '2 س 14 د',
  match: 98,
  genres: ['خيال علمي', 'مغامرة', 'دراما'],
  type: 'Movie',
  description:
    'عالق على كوكب صحراوي يحتضر، على مستكشف وحيد أن يقرر: هل يرسل إشارة إلى الوطن، أم يتبع ضوءًا غامضًا نحو الكوكب العملاق ذي الحلقات في الأفق؟',
}

export const titles: Title[] = [
  {
    id: 'neon-rain',
    name: 'مطر النيون',
    image: '/images/p1.png',
    year: 2025,
    rating: '+16',
    duration: '3 مواسم',
    match: 95,
    genres: ['جريمة', 'إثارة'],
    type: 'Series',
    description: 'محقق منهك يطارد قاتلًا شبحيًا في شوارع مدينة لا تنام يغمرها المطر.',
  },
  {
    id: 'the-lantern',
    name: 'الفانوس',
    image: '/images/p2.png',
    year: 2024,
    rating: '+18',
    duration: '1 س 48 د',
    match: 89,
    genres: ['رعب', 'غموض'],
    type: 'Movie',
    description: 'تعود فتاة إلى كوخ جدتها في الغابة لتكتشف أن الفانوس المعلّق في النافذة يُبقي شيئًا ما في الخارج منذ عقود.',
  },
  {
    id: 'dust-run',
    name: 'سباق الغبار',
    image: '/images/p3.png',
    year: 2026,
    rating: '+13',
    duration: '2 س 02 د',
    match: 92,
    genres: ['أكشن', 'إثارة'],
    type: 'Movie',
    description: 'سائق هروب واحد. وادٍ واحد. ستون دقيقة قبل الغروب للنجاة من أخطر عصابة في الصحراء.',
  },
  {
    id: 'rooftops',
    name: 'أسطح باريس',
    image: '/images/p4.png',
    year: 2025,
    rating: '+7',
    duration: '1 س 36 د',
    match: 87,
    genres: ['رومانسي', 'كوميديا'],
    type: 'Movie',
    description: 'غريبان يُحبسان على سطح المبنى نفسه في باريس، فيقضيان ليلة طويلة ومضحكة في البحث عن طريق للنزول.',
  },
  {
    id: 'emberfall',
    name: 'سقوط الجمر',
    image: '/images/p5.png',
    year: 2026,
    rating: '+16',
    duration: 'موسمان',
    match: 97,
    genres: ['فانتازيا', 'ملحمي'],
    type: 'Series',
    description: 'آخر فارسة من طائفة منهارة تتسلق قمم العواصف لتساوم التنين الذي أحرق مملكتها.',
  },
  {
    id: 'abyssal',
    name: 'الأعماق',
    image: '/images/p6.png',
    year: 2025,
    rating: '+13',
    duration: '1 س 58 د',
    match: 91,
    genres: ['خيال علمي', 'إثارة'],
    type: 'Movie',
    description: 'طاقم أعماق البحار يعثر في قاع المحيط على مدينة أقدم من البشرية، ولا تزال تعمل.',
  },
  {
    id: 'high-ghosts',
    name: 'أشباح القمم العالية',
    image: '/images/p7.png',
    year: 2024,
    rating: 'للجميع',
    duration: 'موسم واحد',
    match: 94,
    genres: ['وثائقي', 'طبيعة'],
    type: 'Series',
    description: 'عام كامل في حياة نمر الثلوج المراوغ، صُوّر عبر أبعد سلاسل جبال الهيمالايا.',
  },
  {
    id: 'zero-day',
    name: 'اليوم صفر',
    image: '/images/p8.png',
    year: 2026,
    rating: '+16',
    duration: 'موسمان',
    match: 93,
    genres: ['تقنية', 'إثارة'],
    type: 'Series',
    description: 'أمام خمسة قراصنة 72 ساعة لإيقاف هجوم إلكتروني أطلقوه عن طريق الخطأ.',
  },
]

const byIds = (ids: string[]) => ids.map((id) => titles.find((t) => t.id === id)!)

export const rows: { label: string; items: Title[] }[] = [
  { label: 'الأكثر رواجًا الآن', items: byIds(['emberfall', 'neon-rain', 'dust-run', 'zero-day', 'abyssal']) },
  { label: 'جديد على Netfly', items: byIds(['zero-day', 'dust-run', 'emberfall', 'rooftops', 'high-ghosts']) },
  { label: 'أفلام ومسلسلات الإثارة', items: byIds(['abyssal', 'neon-rain', 'the-lantern', 'zero-day', 'dust-run']) },
  { label: 'أعمال مُبهجة وطبيعة', items: byIds(['rooftops', 'high-ghosts', 'emberfall', 'abyssal']) },
]

export const allTitles = [featured, ...titles]
