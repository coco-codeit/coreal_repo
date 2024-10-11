"use client";
import React from "react";
import { DayPicker } from "@/app/gatherings/list/components/filter/CustomDayPicker";
import { ko } from "date-fns/locale";

interface ICalendar {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

function Calendar({ selectedDate, onSelectDate }: ICalendar) {
  return (
    <DayPicker
      locale={ko}
      mode="single"
      selected={selectedDate}
      onSelect={onSelectDate}
      showOutsideDays
    />
  );
}

export default Calendar;
