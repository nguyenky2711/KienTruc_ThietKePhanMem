import Home from "../pages/Home";
import ListParks from "../pages/ListParks";

const staffRouter = [
    {
        role: 'Nhân Vien',
        path: '/staff',
        element: <Home />,
        children: [
            {
                path: 'listPark',
                Component: ListParks,
            },
        ]
    }
];
export default staffRouter
