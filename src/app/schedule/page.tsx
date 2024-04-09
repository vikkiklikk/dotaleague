'use client';

import HomeLayout from '../../components/HomeLayout'
import { Calendar } from "@/components/ui/calendar"
import React from 'react'

export default function Schedule () {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    
    return (
        <>
        <HomeLayout>
            <div className="flex justify-center pt-10">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
  /></div>
        </HomeLayout>
        </>
    )
}