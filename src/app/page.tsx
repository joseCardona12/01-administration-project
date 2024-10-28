import { redirect } from "next/navigation";

export default function HomeView(){
  return(
    redirect("/dashboard")
  )
}