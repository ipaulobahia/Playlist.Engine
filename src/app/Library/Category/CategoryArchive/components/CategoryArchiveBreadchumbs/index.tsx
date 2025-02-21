import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePlaylistList } from "@/service/api/playlist/query/getPlaylistList";
import { CategoryEnum, translateToPT } from "@/utils";
import { Link, useSearchParams } from "react-router-dom";

export const CategoryArchiveBreadchumbs = () => {
  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");
  const folderId = searchParams.get("folderId");

  const { data } = usePlaylistList(folderId)

  return (
    <Breadcrumb className="p-3">
      <BreadcrumbList>
        <BreadcrumbItem className="hidden sm:block">
          <BreadcrumbLink asChild>
            <Link to={'/dashboard'}>
              Dashboard
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:block" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={'/library'}>
              Biblioteca
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="cursor-pointer">
            <Link to={`/library/category?categoryType=${categoryType}`}>
              {translateToPT(categoryType as CategoryEnum)}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{data?.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}