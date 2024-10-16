"use client";
import React from "react";
import { ko } from "date-fns/locale";
import { DayPicker } from "@/app/gatherings/components/filter/CustomDayPicker";

interface ICalendar {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  modal?: boolean;
}

function Calendar({ selectedDate, onSelectDate, modal }: ICalendar) {
  return (
    <DayPicker
      locale={ko}
      mode="single"
      selected={selectedDate}
      onSelect={onSelectDate}
      showOutsideDays
      isModal={modal}
    />
  );
}

export default Calendar;
