import type { ReactNode, MouseEvent } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal-root');

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}
const Modal = ({ children, onClose }: ModalProps) => {

    if (!modalRoot) return null;

    let mouseDownTarget: EventTarget | null = null;

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        // eslint-disable-next-line react-hooks/immutability
        mouseDownTarget = e.target;
    }

    const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === mouseDownTarget && e.target === e.currentTarget) {
            onClose();
        }
    }

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    return createPortal(
        <div className="modal-overlay" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div className="modal" onClick={handleContentClick}>
                <span className="modal__close" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>, modalRoot
    );
}

export default Modal