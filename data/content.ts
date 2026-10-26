export interface WorkItem {
  id: string;
  number: string;
  title: string;
  category: string;
  url: string;
  image: string;
  badge: "SAMPLE WORK" | "CONCEPT PROJECT";
  description: string;
  points: string[];
}

export const WORKS_DATA: WorkItem[] = [
  {
    id: "world-training-studio",
    number: "01",
    title: "World Training Studio",
    category: "Fitness / Landing Page",
    url: "https://worldtrainingstudio-lp.vercel.app/",
    image: "/images/works/work-01-worldtraining.jpg",
    badge: "CONCEPT PROJECT",
    description: "トレーニングサービスの魅力を伝え、利用を検討する方が必要な情報を直感的に理解しやすい構成を追求したコンバージョン重視のLP。",
    points: ["明確なCTA配置", "安心感を与える料金体系の可視化", "スマートフォン特化設計"],
  },
  {
    id: "hair-salon-riche",
    number: "02",
    title: "Hair Salon Riche",
    category: "Beauty / Hair Salon",
    url: "https://hair-salon-riche-qzio.vercel.app/",
    image: "/images/works/work-02-hairsalonriche.jpg",
    badge: "CONCEPT PROJECT",
    description: "サロンの上質な空気感とスタイリストの魅力を余白と写真で表現し、来店検討者がスムーズに予約できる動線を構築したサロンサイト。",
    points: ["洗練されたビジュアル構成", "メニュー・価格表の見やすさ", "予約動線の常時表示"],
  },
  {
    id: "urban-closet",
    number: "03",
    title: "URBAN CLOSET",
    category: "Fashion / E-commerce Concept",
    url: "https://urban-closet-sigma.vercel.app/",
    image: "/images/works/work-03-urbancloset.jpg",
    badge: "CONCEPT PROJECT",
    description: "ミニマルな美意識とプロダクトの質感を際立たせるモダンなエディトリアルレイアウトを採用した、アパレルECコンセプトサイト。",
    points: ["世界観を引き立てるモノトーン設計", "商品詳細への滑らかな遷移", "直感的なフィルタリング"],
  },
  {
    id: "mediup",
    number: "04",
    title: "Mediup",
    category: "Corporate / Business Website",
    url: "https://mediup-taupe.vercel.app/",
    image: "/images/works/work-04-mediup.jpg",
    badge: "CONCEPT PROJECT",
    description: "事業内容とソリューションを論理的に整理し、BtoBクライアントに対する高い信頼感と清潔感を提供するコーポレートサイト。",
    points: ["論理的な情報設計", "コーポレートアイデンティティの体現", "問い合わせへの誘導率向上"],
  },
  {
    id: "at-home",
    number: "05",
    title: "At Home",
    category: "Web Design / Website",
    url: "https://athome-temp-app.vercel.app/",
    image: "/images/works/work-05-athome.jpg",
    badge: "SAMPLE WORK",
    description: "ユーザーが必要な情報へ迷わず辿り着けるよう、情報階層の設計とレスポンシブな操作性にこだわったウェブサイト制作。",
    points: ["明瞭なタイポグラフィ", "アクセシビリティへの配慮", "軽快なページローディング"],
  },
];

export const SKILLS_DATA = [
  { name: "HTML / CSS", category: "Core", desc: "セマンティックなマークアップと保守性の高いモダンCSS設計" },
  { name: "JavaScript", category: "Language", desc: "DOM操作から非同期処理、インタラクションの実装" },
  { name: "TypeScript", category: "Language", desc: "型安全なコードベースによるバグ防止と拡張性の担保" },
  { name: "React", category: "Framework", desc: "コンポーネント指向による再利用性の高いUI設計" },
  { name: "Next.js", category: "Framework", desc: "App Router、SSR/SSG、画像最適化を活用した高速開発" },
  { name: "Tailwind CSS", category: "Styling", desc: "一貫性のあるデザインシステムとスピーディなレスポンシブ実装" },
  { name: "Git / GitHub", category: "Tool", desc: "バージョン管理、チーム開発フロー、ブランチ運用" },
  { name: "Figma", category: "Design", desc: "ワイヤーフレーム、高精度モックアップ、コンポーネント管理" },
  { name: "WordPress", category: "CMS", desc: "オリジナルテーマ構築、カスタム投稿・ブロック制作" },
  { name: "Shopify", category: "EC", desc: "ストア構築、テーマカスタマイズ、Liquidの調整" },
  { name: "Responsive Design", category: "Quality", desc: "あらゆるデバイスで崩れず快適に閲覧できる設計" },
  { name: "SEO", category: "Marketing", desc: "構造化データ、見出し設計、Core Web Vitalsを意識した施策" },
];
