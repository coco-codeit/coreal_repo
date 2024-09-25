import { useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * 모달을 쉽게 제작하기 위한 훅으로,
 * Modal 컴포넌트와 모달의 상태를 관리하는 open, setOpen이 제공됩니다.
 *
 * @example
 * const { Modal, open, setOpen } = useModal();
 *
 * return (
 *   <>
 *     <button onClick={() => setOpen(true)}>모달 띄우기</button>
 *     <Modal>
 *       <Modal.Background className="bg-black/50" />
 *       <Modal.Container>
 *         <h2>모달 컨텐츠</h2>
 *         <button onClick={() => setOpen(false)}>모달 닫기</button>
 *       </Modal.Container>
 *     </Modal>
 *   </>
 * );
 *
 */

export default function useModal() {
  const [open, setOpen] = useState<boolean>(false);

  function Modal({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) {
    return (
      <Portal>
        {open && (
          <div className={`fixed top-0 left-0 ${className ? className : ""}`}>
            {children}
          </div>
        )}
      </Portal>
    );
  }

  function Background({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) {
    return (
      <div
        className={`absolute top-0 left-0 ${className ? className : ""}`}
        style={{ width: "100vw", height: "100vh" }}
        // 특정 조건에서 tailwindCSS의 w-*와 h-*가 읽어지지 않는 경우가 있어 인라인 스타일로 지정했습니다.
        // https://github.com/tailwindlabs/tailwindcss/discussions/12358
        // 작성자 : 이은혁
      >
        {children}
      </div>
    );
  }

  function Container({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) {
    const containerRef = useRef(null);

    const handleClickOutside = (e: React.MouseEvent) => {
      if (e.target !== containerRef.current) setOpen(false);
    };

    return (
      <div
        className="absolute top-0 left-0 flex flex-col justify-center items-center"
        onClick={handleClickOutside}
        style={{ width: "100vw", height: "100vh" }}
        // 특정 조건에서 tailwindCSS의 w-*와 h-*가 읽어지지 않는 경우가 있어 인라인 스타일로 지정했습니다.
        // https://github.com/tailwindlabs/tailwindcss/discussions/12358
        // 작성자 : 이은혁
      >
        <div
          ref={containerRef}
          className={`relative rounded-xl bg-white p-2 ${className ? className : ""}`}
        >
          {children}
        </div>
      </div>
    );
  }
  Modal.Background = Background;
  Modal.Container = Container;

  return { Modal, open, setOpen };
}

function Portal({ children }: { children?: React.ReactNode }) {
  const rootModal = document.querySelector("#modal_root");
  return rootModal && createPortal(children, rootModal);
}
