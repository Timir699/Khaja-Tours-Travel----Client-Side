import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css'
const ServiceDetail = () => {

    // React-Router Hooks
    const { ServiceId } = useParams()
    console.log(ServiceId);
    // Hooks
    const AllServices = useServices()
    // find details to show in UI
    // let Id = parseInt(ServiceId)
    let serviceDetail = AllServices?.find(element => {
        return element._id === ServiceId
    })

    return (
        <div className="service-detail text-center">
            <h2 className="mt-3">Details of {serviceDetail?.name}</h2>
            <img src={serviceDetail?.image} alt="" className="w-25 my-3" />
            <p className="w-75 m-auto mb-5 pb-4">{serviceDetail?.description}</p>
        </div>
    );
};

export default ServiceDetail;