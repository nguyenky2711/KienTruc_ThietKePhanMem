// import axios from 'axios';
import PocketBase from "pocketbase";
import {CreateCRUD} from "../../pkg/api/crud.mjs";
import {createAsyncThunk} from '@reduxjs/toolkit';

const pb = new PocketBase("https://aplonis-meln.alwaysdata.net");
// const baseURL = 'https://aplonis-meln.alwaysdata.net';
const authData = await pb
    .collection("users")
    .authWithPassword("shanenoi.org@gmail.com", "32641270013264");

const EmployeeCRUD = CreateCRUD(pb, 'employee');
const ParkCRUD = CreateCRUD(pb, 'park');
const CostCRUD = CreateCRUD(pb, 'cost');
const CameraCRUD = CreateCRUD(pb, 'camera');
const AttendanceCRUD = CreateCRUD(pb, 'attendance');

const isEnableFactoryCRUD = () => {
    return localStorage.getItem('isEnableFactoryCRUD') === 'true'
}


export const getStaffThunk = createAsyncThunk(
    'staff/getStaffThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return await EmployeeCRUD.getFullList({
                sort: '-created',
            })
        } else {
            return await pb.collection('users').getFullList({
                sort: '-created',
            });
        }
    }
);

export const createStaffThunk = createAsyncThunk(
    'staff/createStaffThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return EmployeeCRUD.create(args);
        } else {
            return await pb.collection('users').create(args);
        }
    }
);

export const updateStaffThunk = createAsyncThunk(
    'staff/updateStaffThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return EmployeeCRUD.update(args[0], args[1]);
        } else {
            return await pb.collection('users').update(args[0], args[1]);
        }
    }
);
// export const createStaffThunk = createAsyncThunk(
//     'staff/createStaffThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .post(
//                 `${baseURL}/api/collections/users/records`,
//                 args[0],
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const getStaffThunk = createAsyncThunk(
//     'staff/getStaffThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[0],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .get(
//                 `${baseURL}/api/collections/users/records`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const updateStaffThunk = createAsyncThunk(
//     'staff/updateStaffThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[2],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .patch(
//                 `${baseURL}/api/collections/users/records/${args[0]}`,
//                 args[1],
//                 // header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });;
//     }
// );
// ======================================== //
export const getCostThunk = createAsyncThunk(
    'cost/getCostThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CostCRUD.getFullList({sort: "-created"});
        } else {
            return await pb
                .collection("prices")
                .getFullList({sort: "-created"});
        }
    }
);

export const createCostThunk = createAsyncThunk(
    'cost/createCostThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CostCRUD.create(args);
        } else {
            return await pb.collection("prices").create(args);
        }
    }
);

export const updateCostThunk = createAsyncThunk(
    'cost/updateCostThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CostCRUD.update(args[0], args[1]);
        } else {
            return await pb.collection('prices').update(args[0], args[1]);
        }
    }
);

export const deleteCostThunk = createAsyncThunk(
    'cost/deleteCostThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CostCRUD.delete(args);
        } else {
            return await pb.collection('prices').delete(args);
        }
    }
);

// export const deleteCostThunk = createAsyncThunk(
//     'cost/deleteCostThun',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .delete(
//                 `${baseURL}/api/collections/prices/records/${args[0]}`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const getCostThunk = createAsyncThunk(
//     'cost/getCostThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[0],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .get(
//                 `${baseURL}/api/collections/prices/records`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const createCostThunk = createAsyncThunk(
//     'cost/createCostThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .post(
//                 `${baseURL}/api/collections/prices/records`,
//                 args[0],
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const updateCostThunk = createAsyncThunk(
//     'cost/updateCostThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[2],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .patch(
//                 `${baseURL}/api/collections/prices/records/${args[0]}`,
//                 args[1],
//                 // header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });;
//     }
// );
// ======================================== //

export const getParkThunk = createAsyncThunk(
    'park/getParkThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return ParkCRUD.getFullList({sort: "-created"});
        } else {
            return await pb
                .collection("areas")
                .getFullList({sort: "-created"});
        }
    }
);
export const createParkThunk = createAsyncThunk(
    'park/createParkThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return ParkCRUD.create(args);
        } else {
            return await pb.collection("areas").create(args);
        }
    }
);
export const updateParkThunk = createAsyncThunk(
    'park/updateParkThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return ParkCRUD.update(args[0], args[1]);
        } else {
            return await pb.collection('areas').update(args[0], args[1]);
        }
    }
);
export const deleteParkThunk = createAsyncThunk(
    'park/deleteParkThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return ParkCRUD.delete(args);
        } else {
            return await pb.collection('areas').delete(args);
        }
    }
);


// export const getParkThunk = createAsyncThunk(
//     'park/getParkThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[0],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .get(
//                 `${baseURL}/api/collections/areas/records`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const createParkThunk = createAsyncThunk(
//     'park/createParkThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .post(
//                 `${baseURL}/api/collections/areas/records`,
//                 args[0],
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const deleteParkThunk = createAsyncThunk(
//     'park/deleteParkThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .delete(
//                 `${baseURL}/api/collections/areas/records/${args[0]}`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
// export const updateParkThunk = createAsyncThunk(
//     'park/updateParkThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[2],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .patch(
//                 `${baseURL}/api/collections/areas/records/${args[0]}`,
//                 args[1],
//                 // header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });;
//     }
// );
// ======================================== //
export const getCameraThunk = createAsyncThunk(
    'camera/getCameraThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CameraCRUD.getFullList({sort: "-created"});
        } else {
            return await pb
                .collection("cameras")
                .getFullList({sort: "-created"});
        }
    }
);

export const createCameraThunk = createAsyncThunk(
    'camera/createCameraThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CameraCRUD.create(args);
        } else {
            return await pb.collection("cameras").create(args);
        }
    }
);

export const updateCameraThunk = createAsyncThunk(
    'camera/updateCameraThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CameraCRUD.update(args[0], args[1]);
        } else {
            return await pb.collection('cameras').update(args[0], args[1]);
        }
    }
);

export const deleteCameraThunk = createAsyncThunk(
    'camera/deleteCameraThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return CameraCRUD.delete(args);
        } else {
            return await pb.collection('cameras').delete(args);
        }
    }
);

// export const createCameraThunk = createAsyncThunk(
//     'camera/createCameraThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .post(
//                 `${baseURL}/api/collections/cameras/records`,
//                 args[0],
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );

// export const getCameraThunk = createAsyncThunk(
//     'camera/getCameraThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[0],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .get(
//                 `${baseURL}/api/collections/cameras/records`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );

// export const deleteCameraThunk = createAsyncThunk(
//     'camera/deleteCameraThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .delete(
//                 `${baseURL}/api/collections/cameras/records/${args[0]}`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );

// export const updateCameraThunk = createAsyncThunk(
//     'camera/updateCameraThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[2],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .patch(
//                 `${baseURL}/api/collections/cameras/records/${args[0]}`,
//                 args[1],
//                 // header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });;
//     }
// );

// ======================================== //
export const getUserInforThunk = createAsyncThunk(
    'user/getUserInforThunk',
    async (args) => {
        return await pb
            .collection("users")
            .authWithPassword(args[0], args[1]);
    }
);
// ======================================== //
export const getCardListThunk = createAsyncThunk(
    'card/getCardListThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return AttendanceCRUD.getFullList({sort: '-created'});
        } else {
            return await pb.collection('attendances').getFullList({
                sort: '-created',
            });
        }
    }
);

export const createCardInforThunk = createAsyncThunk(
    'card/createCardInforThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return AttendanceCRUD.create(args);
        } else {
            return await pb.collection('attendances').create(args);
        }
    }
);
// export const createCardInforThunk = createAsyncThunk(
//     'card/createCardInforThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .post(
//                 `${baseURL}/api/collections/attendances/records`,
//                 args[0],
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );

// export const getCardInforThunk = createAsyncThunk(
//     'card/getCardInforThunk',
//     async (args) => {
//         const header = {
//             headers: {
//                 Authorization: 'Bearer ' + args[1],
//                 // 'Content-Type': 'multipart/form-data',
//             },
//         };
//         return await axios
//             .get(
//                 `${baseURL}/api/collections/attendances/records/${args[0]}`,
//                 header,
//             )
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((error) => {
//                 return error.response.data;
//             });
//     }
// );
export const updateCardThunk = createAsyncThunk(
    'card/updateCardThunk',
    async (args) => {
        if (isEnableFactoryCRUD()) {
            return AttendanceCRUD.update(args[0], args[1]);
        } else {
            return await pb.collection('attendances').update(args[0], args[1]);
        }
    }
);
