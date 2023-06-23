import ServicesList from "./ServicesList/ServicesList"
import SystemServices from "../SystemServices"
import { useSelector } from "react-redux"
import './index.css'

export default function MainDetails() {
    const { loading, error } = useSelector(state => state.services);

    return (
        <div className='main-details-app'>
            <ServicesList />
            {/* <Routes>
                <Route path='/ra-redux-observable/main-details/:id/details' element={<ServiceDetails />}></Route>
            </Routes> */}
            <SystemServices message={{loading, error}}/>
        </div>
    )
}