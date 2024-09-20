// 작성자 : 이은혁
"use client";
import React, { createContext, useContext, useState } from "react";

interface TabsContextInterface {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface TabsPropsInterface {
  onClick?: React.Dispatch<React.SetStateAction<number>>;
  "data-index"?: number;
  "data-selected"?: boolean;
}

const TabsContext = createContext<TabsContextInterface>(
  {} as TabsContextInterface,
);

function Tabs({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const [index, setIndex] = useState<number>(0);
  return (
    <TabsContext.Provider value={{ setIndex, index }}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsWrapper({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  // 다음 코드는 탭 버튼에 클릭 이벤트를 추가하는 과정
  const { index, setIndex } = useContext(TabsContext);

  return (
    <div {...props}>
      {React.Children.map(children, (child, childIndex) =>
        React.isValidElement<TabsPropsInterface>(child)
          ? React.cloneElement(child, {
              onClick: () => setIndex(childIndex),
              "data-index": childIndex,
              "data-selected": index === childIndex,
            })
          : child,
      )}
    </div>
  );
}

function Tab({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return <span {...props}>{children}</span>;
}

function ContentsWrapper({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  // 다음 코드는 Contents 중 현재 선택한 Index의 컨텐츠만 보이도록 하기 위함
  const { index } = useContext(TabsContext);
  return <div {...props}>{React.Children.toArray(children)[index]}</div>;
}

function Content({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return <div {...props}>{children}</div>;
}

function DefaultContent({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return <div {...props}>{children}</div>;
}

Tabs.TabsWrapper = TabsWrapper;
Tabs.Tab = Tab;
Tabs.ContentsWrapper = ContentsWrapper;
Tabs.Content = Content;
Tabs.DefaultContent = DefaultContent;

export default Tabs;
