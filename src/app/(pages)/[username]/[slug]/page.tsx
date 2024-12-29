export const runtime = "edge";
export const preferredRegion = "auto";
export const dynamic = "force-dynamic";

import { PROJECTS } from "../../../../../_data/contents";
import MarkdownViewer from "./_components/markdown-viewer";
import MetaDataCard from "./_components/metadata-card";

export default async function Detail({
  params,
}: {
  params: { username: string; slug: string };
}) {
  const { username, slug } = params;
  const repoUrl = `https://github.com/${username}/${slug}`;

  const isValidUrl = PROJECTS.some((project) => project.repoUrl === repoUrl);

  if (!isValidUrl) {
    return null;
  }

  return (
    <div className="md:flex-row flex flex-col max-w-7xl mx-auto gap-4">
      <div className="md:w-2/3 w-full h-full ">
        <MarkdownViewer repoUrl={repoUrl} />
      </div>
      <div className="md:w-1/3 w-full sticky top-24 h-screen overflow-hidden">
        <MetaDataCard repoUrl={repoUrl} />
      </div>
    </div>
  );
}
