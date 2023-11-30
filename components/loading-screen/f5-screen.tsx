'use client'

import { useEffect, useState } from "react";
import LoadingTwo from "./loading-two/loading";

type Props = {
    children: React.ReactNode;
};


export default function Loading({ children }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(false);
    }, []);

      
    return (
        <>
        {isLoading ? <LoadingTwo /> : children}
       </>
    )
}