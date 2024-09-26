import { useRef, useState } from "react";
import { createPortal } from "react-dom";

interface InlineStyleInterface {
  [style: string]: string | number;
}

// tailwindCSS가 특정 조건에서 CSS가 입혀지지 않는 문제가 있어
// 아래와 같이 인라인 스타일을 지정해서 적용해두었습니다.
// 작성자: 이은혁

const bgStyle: InlineStyleInterface = {
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgb(0 0 0 / 0.5)",
  WebkitBackdropFilter:
    "blur(16px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
  backdropFilter:
    "blur(16px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
};

const modalStyle: InlineStyleInterface = {
  minWidth: "150px",
  minHeight: "200px",
  padding: "1rem",
};

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
 *       <h2>모달 컨텐츠</h2>
 *       <button onClick={() => setOpen(false)}>모달 닫기</button>
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
    const modalOverlayRef = useRef(null);

    const handleClickOverlay = (e: React.MouseEvent) => {
      if (e.target === modalOverlayRef.current) setOpen(false);
    };

    return (
      <Portal>
        {open && (
          <div
            ref={modalOverlayRef}
            onClick={handleClickOverlay}
            style={bgStyle}
          >
            <div className={className} style={modalStyle}>
              {children}
            </div>
          </div>
        )}
      </Portal>
    );
  }

  return { Modal, open, setOpen };
}

function Portal({ children }: { children?: React.ReactNode }) {
  const rootModal = document.querySelector("#modal_root");
  return rootModal && createPortal(children, rootModal);
}
