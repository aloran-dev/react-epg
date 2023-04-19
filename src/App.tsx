import { useState } from "react"
import TvGuide from './containers/TvGuide'
import { useAppDispatch, useAppSelector } from "./redux/store"
import { fetchNewEpg } from "./redux/epgSlice"
import { isEpgFirstLoad } from './redux/selectors/epg';

const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const epgFirstLoadStatus = useAppSelector((state) => isEpgFirstLoad(state));


  const handleClick = async () => {
    setIsMounted(true);
    if (epgFirstLoadStatus) await dispatch(fetchNewEpg());

    setShowModal(true);
  }

  const handleClose = () => {
    setIsMounted(false);
    setShowModal(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-red-800 text-gray-50 py-4 px-6 rounded transition ease-in-out hover:bg-red-700 hover:-translate-y-1 duration-150"
        disabled={isMounted}
      >{!isMounted ? <span>Mostrar EPG</span> : <span>Cargando datos...</span>}</button>

      <div className={`fixed top-0 left-0 z-10 bg-slate-800 transition-all duration-500 ${showModal ? 'translate-y-0 scale-100' : 'translate-y-full scale-90'}`}>
        <TvGuide />

        <button
          onClick={handleClose}
          className=" text-gray-50 text-lg absolute right-8 top-8 z-20 w-12 h-12 rounded-full transition ease-in-out duration-200 hover:bg-gray-100/10 text-center"
        >x</button>
      </div>

    </div>
  )
}

export default App;
