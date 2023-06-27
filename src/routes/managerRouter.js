import AllEmployee from "../pages/AllEmployee";
import CostSetting from "../pages/CostSetting";
import ListParks from "../pages/ListParks";
import CheckSecurity from "../pages/CheckSecurity";
const managerRouter =[ 
    {
        role: 'Quản lý',
        path: '/manager',
        element: <AllEmployee/>,
        children: [
            {
                path: 'cost',
                Component: CostSetting,
            },
            {
                path: 'park',
                Component: ListParks,
            },
            {
                path: 'camera',
                Component: CheckSecurity,
            },
        ]
    }
];
export default managerRouter;