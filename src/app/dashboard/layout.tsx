import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React from "react";
import Error from "./error";


export default function DashbaordLayout({
    children,
    team,
    user,
    create,
    delete_car,
    update,
    table
}: {
    children: React.ReactNode
    team: React.ReactNode
    user:React.ReactNode
    login:React.ReactNode
    create: React.ReactNode
    delete_car: React.ReactNode
    update: React.ReactNode
    table:React.ReactNode
}) {

    // const isLoggin = false;
    // if(!isLoggin){
    //     return login
    // }

    return (
        
        <div>
            {/* <Link href={'/dashboard'}> Dashboard </Link>
            <Link href={'/dashboard/settings'}>Setting Page</Link> */}
          <ErrorBoundary errorComponent={Error}>
              {children}
              {team}
              {user}
              {create}
          
            {/* {create}
            {update}
            {delete_car} */}
            {table}
          </ErrorBoundary>
        </div>
    )
}