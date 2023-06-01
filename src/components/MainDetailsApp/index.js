import ServicesList from "./ServicesList/ServicesList"
import SystemServices from "../SystemServices"

export default function MainDetails() {

    return (
        <div className='main-details-app'>
            <ServicesList />
            {/* <Routes>
                <Route path='/ra-redux-observable/main-details/:id/details' element={<ServiceDetails />}></Route>
            </Routes> */}
            <SystemServices />
        </div>
    )
}