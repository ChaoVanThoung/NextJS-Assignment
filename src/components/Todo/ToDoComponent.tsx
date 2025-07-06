
"use client"

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

type TodoType= {
   id:number;
   title:string;
   completed: boolean;
}

export function ToDoComponent() {

    const[todo, setTodo] = useState<TodoType[]>([]);

    useEffect(
        ()=>{
            async function fetchData() {
                const res = await fetch(`${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_BASE_URL}/todos`);
                const data = await res.json();
                console.log("This is data", data);
                setTodo(data);
            }
            fetchData();
        }
        ,[])


  return (
    <Card className="relative max-w-md shadow-none">
      {
        todo.map((d)=>(
            <CardContent key={d.id}>
        <CardTitle className="text-2xl">{d.title}</CardTitle>
        <p>{d.completed.toString()}</p>
        {/* <CardDescription>
            completed: {d.completed}
        </CardDescription> */}
      </CardContent>
        ))
      }
    </Card>
  );
}
