'use client';

import {useBreadcrumb} from "@/contexts/BreadcrumbContext";
import {useEffect} from "react";

export default function BreadcrumbSetter({ breadcrumbs }) {
    const { setBreadcrumbs } = useBreadcrumb();

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs, breadcrumbs]);

    return null;
}