import AppView from "@/sections/dashboard/app/view"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'App Dashboard Dropify',
}

export default function Page() {
    return <AppView />
}