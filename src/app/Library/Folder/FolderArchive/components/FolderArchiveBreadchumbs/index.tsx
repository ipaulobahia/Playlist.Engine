import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const FolderArchiveBreadchumbs = () => {
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
          <BreadcrumbLink className="cursor-pointer">
            <Link to={`/library/folder`}>
              Pastas
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>[Nome da pasta]</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}