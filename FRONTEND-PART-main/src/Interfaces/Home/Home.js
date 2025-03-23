import ImageBanner from "../../components/ImageBanner/ImageBanner";
import BlogSection from "../../components/BlogSection/BlogSection";
import CategorySearch from "../../components/CategorySearch/CategorySearch";
import CampaignParts from "../../components/CampaignParts/CampaignParts";


function Home() {
  return (
    <div className="Home">
      <ImageBanner
        imageUrl="/Images/images.jpg"
        title="Welcome to TrueFunding!"
        description="Support a cause that matters to you. Donate to a campaign today."
        breadcrumbs={["Home", "Active Page"]}
      />
      <CategorySearch />
      <CampaignParts />
      <BlogSection />
    </div>
  );
}

export default Home;
