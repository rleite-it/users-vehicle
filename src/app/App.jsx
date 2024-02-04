import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "components/Filter/Filter";
import List from "components/List/List";
import Loading from "components/Loading/Loading";
import Modal from "components/Modal/Modal";
import SkeletonList from "components/Skeleton/SkeletonList";
import {
	fetchPeopleAsync,
	selectInitialLoading,
	selectLoadingVehicles,
} from "components/List/listSlice";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
	const dispatch = useDispatch();
	const initialLoading = useSelector(selectInitialLoading);
	const loadingVehicles = useSelector(selectLoadingVehicles);

	useEffect(() => {
		dispatch(fetchPeopleAsync());
	}, [dispatch]);

	return (
		<div className="w-screen h-screen flex flex-col place-items-center gap-12 pt-12">
			<Filter />
			{initialLoading ? <SkeletonList /> : <List />}
			{loadingVehicles && <Loading />}
			<Modal />
			<ToastContainer
				position="bottom-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				draggable
				limit={3}
				theme="colored"
				transition={Bounce}
			/>
		</div>
	);
}

export default App;
