import Card from "@/components/Card";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-7xl font-bold mb-4 text-center">Welcome to Next.js Blog</h1>
      <p className="text-gray-600 mb-8 text-center">This is a simple blog built with Next.js.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card
          title="First Post"
          description="This is the first post description."
          imageUrl="/post1.jpg"
        />
        <Card
          title="Second Post"
          description="This is the second post description."
          imageUrl="/post2.jpg"
        />
        <Card
          title="Third Post"
          description="This is the third post description."
          imageUrl="/post3.jpeg"
        />
      </div>
    </div>
  );
};