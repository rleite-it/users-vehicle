import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	closeViewVehicles,
	selectVehicles,
	selectViewVehicles,
} from "components/List/listSlice";
import CloseIcon from "assets/CloseIcon";
import Card from "components/Card/Card";

const Modal = () => {
	const vehicles = useSelector(selectVehicles);
	const viewVehicles = useSelector(selectViewVehicles);
	const dispatch = useDispatch();

	const modalRoot = document.getElementById("modal-root");

	useEffect(() => {
		if (!modalRoot) return;

		const modalContainer = document.createElement("div");
		modalRoot.appendChild(modalContainer);

		// Cleanup function to remove the container when the modal is closed or the component unmounts
		return () => {
			modalRoot.removeChild(modalContainer);
		};
	}, [modalRoot]);

	const handleClose = () => {
		dispatch(closeViewVehicles());
	};

	// Framer Motion variants for animations
	const modalVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};

	if (!modalRoot) return null;

	return ReactDOM.createPortal(
		<AnimatePresence>
			{viewVehicles && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
					<div className="fixed top-0 left-0 w-full h-full bg-black opacity-40"></div>
					<motion.div
						className="w-[56rem] h-[38rem] relative bg-white pt-6 pb-2 pl-2 pr-2 rounded-md overflow-y-auto text-black"
						initial={modalVariants.hidden}
						animate={modalVariants.visible}
						exit={modalVariants.hidden}
					>
						<button
							onClick={handleClose}
							className="absolute top-5 right-5 p-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 transition-all duration-300 rounded-full bg-transparent"
						>
							<CloseIcon width="1.5rem" height="1.5rem" />
						</button>
						{vehicles.length ? (
							<div className="pt-10 flex flex-wrap justify-center overflow-x-hidden overflow-y-auto gap-6">
								{vehicles.map((vehicle, i) => (
									<Card key={i} data={vehicle} />
								))}
							</div>
						) : (
							<div className="w-full h-full flex items-center justify-center">
								<p className="text-gray-300 text-3xl">
									User don&apos;t have any vehicle
								</p>
							</div>
						)}
					</motion.div>
				</div>
			)}
		</AnimatePresence>,
		modalRoot
	);
};

export default Modal;
