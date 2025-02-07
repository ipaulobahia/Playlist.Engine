import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CategoryEnum, translateToPT } from "@/utils";
import { Link, useSearchParams } from "react-router-dom";

export const CategoryBreadchumbs = () => {
  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");

  return (
    <Breadcrumb className="p-3">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={'/dashboard'}>
            Dashboard
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={'/library'}>
              Biblioteca
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            {translateToPT(categoryType as CategoryEnum)}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}