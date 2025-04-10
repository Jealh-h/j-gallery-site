import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ImagePreview from "@/components/ImagePreview";
import MasonryGrid from "@/components/MasonryGrid";

interface CategoryPageProps {
  params: {
    type: string;
  };
}

const categoryTitles: { [key: string]: string } = {
  portrait: "人像摄影",
  street: "人文摄影",
  landscape: "风景摄影",
  wildlife: "野生动物",
  architecture: "建筑摄影",
};

// 示例图片数据
const sampleImages = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600",
    alt: "示例图片 1",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800",
    alt: "示例图片 2",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=400",
    alt: "示例图片 3",
    width: 800,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=700",
    alt: "示例图片 4",
    width: 800,
    height: 700,
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=700",
    alt: "示例图片 4",
    width: 800,
    height: 700,
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=500",
    alt: "示例图片 5",
    width: 800,
    height: 500,
  },
  {

    
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=900",
    alt: "示例图片 6",
    width: 800,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=500",
    alt: "示例图片 5",
    width: 800,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=900",
    alt: "示例图片 6",
    width: 800,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600",
    alt: "示例图片 1",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800",
    alt: "示例图片 2",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=400",
    alt: "示例图片 3",
    width: 800,
    height: 400,
  },
];

export default async function CategoryPage({ params }: CategoryPageProps) {
  const _params = await params;
  const categoryTitle = categoryTitles?.[_params?.type] || "未知分类";

  return (
    <PageTransition>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 mb-8 inline-block"
          >
            ← 返回首页
          </Link>
          <h1 className="text-3xl font-bold mb-8">{categoryTitle}</h1>
          <MasonryGrid>
            {sampleImages.map((image, index) => (
              <ImagePreview
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            ))}
          </MasonryGrid>
        </div>
      </div>
    </PageTransition>
  );
}
