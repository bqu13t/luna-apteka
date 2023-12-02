import Image from "next/image";
import storiesList from "@/db/stories/stories-list";

export default function HomePageStoryModal({ id }: { id: string }) {
  const storyItem = storiesList.find((item) => item.id === id);
  const title = storyItem ? storyItem.title : "";
  const description = storyItem ? storyItem.description : "";
  const content_img_src = storyItem ? storyItem.content_img_src : "";
  const content_img_width = storyItem
    ? parseInt(storyItem.content_img_width)
    : undefined;
  const content_img_height = storyItem
    ? parseInt(storyItem.content_img_height)
    : undefined;

  const blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNk4GLAAIxDWRAAMasAb0wzB6IAAAAASUVORK5CYII='

  return (
    <div id={id} className="flex justify-center">
      <h3 className="sr-only">{title}</h3>
      <p className="sr-only">{description}</p>
      <Image
        className="rounded-xl story-img"
        quality={60}
        placeholder="blur"
        blurDataURL={blurDataURL}
        src={content_img_src}
        width={content_img_width}
        height={content_img_height}
        alt={description}
      />
    </div>
  )
}