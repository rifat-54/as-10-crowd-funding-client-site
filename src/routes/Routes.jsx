import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../components/Home';
import AllCampaign from '../components/AllCampaign';
import AddCampaign from '../components/AddCampaign';
import MyCampaign from '../components/MyCampaign';
import MyDonation from '../components/MyDonation';
import Login from '../components/Login';
import Register from '../components/Register';
import PrivateRoutes from './PrivateRoutes';
import UpdateCampaign from '../components/UpdateCampaign';
import DetailsPage from '../components/DetailsPage';


    const routes=createBrowserRouter([
        {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch('https://crowd-funding-server-ten.vercel.app/allusers')
                },
                {
                    path:'/allcampaign',
                    element:<AllCampaign></AllCampaign>,
                    loader:()=>fetch('https://crowd-funding-server-ten.vercel.app/allusers')
                },
                {
                    path:'/addnewcampaign',
                    element:<PrivateRoutes>
                        <AddCampaign></AddCampaign>
                        </PrivateRoutes>
                },
                {
                    path:'/mycampaign',
                    element:<PrivateRoutes>
                        <MyCampaign></MyCampaign>
                    </PrivateRoutes>
                },
                {
                    path:'/mydonation',
                    element:<PrivateRoutes><MyDonation></MyDonation></PrivateRoutes>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/updatecampaign/:id',
                    element:<PrivateRoutes><UpdateCampaign></UpdateCampaign></PrivateRoutes>,
                    loader:({params})=>fetch(`https://crowd-funding-server-ten.vercel.app/mycampaignupdate/${params.id}`)
                },
                {
                    path:'/details/:id',
                    element:<PrivateRoutes>
                        <DetailsPage></DetailsPage>
                    </PrivateRoutes>,
                    loader:({params})=>fetch(`https://crowd-funding-server-ten.vercel.app/mycampaignupdate/${params.id}`)
                }
            ]
        },
        {
            path:'*',
            element:<p className="text-center font-bold text-3xl mt-20">Error 404 <br /> Page not found</p>
        }
    ])
    


 export default routes;