import { ReactNode } from 'react';
import './Modal.scss';

interface ModalProps {
	children: ReactNode;
	closeModal: () => void;
}

// Базовое модальное окно

const Modal = ({ children, closeModal }: ModalProps) => {
	return (
		<div className="modal" onClick={() => closeModal()}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
