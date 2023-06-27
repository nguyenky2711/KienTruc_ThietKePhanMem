import { createAsyncThunk } from '@reduxjs/toolkit';
import PocketBase from "pocketbase";
import axios from 'axios';

const pb = new PocketBase("https://aplonis-meln.alwaysdata.net");
const baseURL = 'https://aplonis-meln.alwaysdata.net';
const authData = await pb
    .collection("users")
    .authWithPassword("shanenoi.org@gmail.com", "32641270013264");

// export const getStaffThunk = createAsyncThunk(
//     'staff/getStaffThunk',
//     async (args) => {
//         const res = await pb.collection('users').getFullList({
//             sort: '-created',
//         })
//         return res;
//     }
// );

// export const createStaffThunk = createAsyncThunk(
//     'staff/createStaffThunk',
//     async (args) => {
//         const res = await pb.collection('users').create(args)
//         return res;
//     }
// );
export const createStaffThunk = createAsyncThunk(
    'staff/createStaffThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .post(
                `${baseURL}/api/collections/users/records`,
                args[0],
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const getStaffThunk = createAsyncThunk(
    'staff/getStaffThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[0],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .get(
                `${baseURL}/api/collections/users/records`,
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const updateStaffThunk = createAsyncThunk(
    'staff/updateStaffThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[2],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .patch(
                `${baseURL}/api/collections/users/records/${args[0]}`,
                args[1],
                // header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });;
    }
);
// ======================================== //
// export const getCostThunk = createAsyncThunk(
//     'cost/getCostThunk',
//     async (args) => {
//         const res = await pb
//             .collection("prices")
//             .getFullList({ sort: "-created" });
//         return res;
//     }
// );

// export const createCostThunk = createAsyncThunk(
//     'cost/createCostThunk',
//     async (args) => {
//         const res = await pb.collection("prices").create(args);
//         return res;
//     }
// );

// export const updateCostThunk = createAsyncThunk(
//     'cost/updateCostThunk',
//     async (args) => {
//         const res = await pb.collection('prices').update(args[0], args[1]);
//         return res;
//     }
// );

// export const deleteCostThunk = createAsyncThunk(
//     'cost/deleteCostThunk',
//     async (args) => {
//         const res = await pb.collection('prices').delete(args);
//         return res;
//     }
// );
export const deleteCostThunk = createAsyncThunk(
    'cost/deleteCostThun',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .delete(
                `${baseURL}/api/collections/prices/records/${args[0]}`,
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const getCostThunk = createAsyncThunk(
    'cost/getCostThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[0],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .get(
                `${baseURL}/api/collections/prices/records`,
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const createCostThunk = createAsyncThunk(
    'cost/createCostThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .post(
                `${baseURL}/api/collections/prices/records`,
                args[0],
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const updateCostThunk = createAsyncThunk(
    'cost/updateCostThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[2],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .patch(
                `${baseURL}/api/collections/prices/records/${args[0]}`,
                args[1],
                // header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });;
    }
);
// ======================================== //

// export const getParkThunk = createAsyncThunk(
//     'park/getParkThunk',
//     async (args) => {
//         const res = await pb
//             .collection("areas")
//             .getFullList({ sort: "-created" });
//         return res;
//     }
// );
// export const createParkThunk = createAsyncThunk(
//     'park/createParkThunk',
//     async (args) => {
//         const res = await pb.collection("areas").create(args);
//         return res;
//     }
// );
// export const updateParkThunk = createAsyncThunk(
//     'park/updateParkThunk',
//     async (args) => {
//         const res = await pb.collection('areas').update(args[0], args[1]);
//         return res;
//     }
// );
// export const deleteParkThunk = createAsyncThunk(
//     'park/deleteParkThunk',
//     async (args) => {
//         const res = await pb.collection('areas').delete(args);
//         return res;
//     }
// );
export const getParkThunk = createAsyncThunk(
    'park/getParkThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[0],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .get(
                `${baseURL}/api/collections/areas/records`,
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const createParkThunk = createAsyncThunk(
    'park/createParkThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .post(
                `${baseURL}/api/collections/areas/records`,
                args[0],
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const deleteParkThunk = createAsyncThunk(
    'park/deleteParkThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .delete(
                `${baseURL}/api/collections/areas/records/${args[0]}`,
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const updateParkThunk = createAsyncThunk(
    'park/updateParkThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[2],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .patch(
                `${baseURL}/api/collections/areas/records/${args[0]}`,
                args[1],
                // header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });;
    }
);
// ======================================== //
// export const getCameraThunk = createAsyncThunk(
//     'camera/getCameraThunk',
//     async (args) => {
//         const res = await pb
//             .collection("cameras")
//             .getFullList({ sort: "-created" });
//         return res;
//     }
// );

// export const createCameraThunk = createAsyncThunk(
//     'camera/createCameraThunk',
//     async (args) => {
//         const res = await pb.collection("cameras").create(args);
//         return res;
//     }
// );

// export const updateCameraThunk = createAsyncThunk(
//     'camera/updateCameraThunk',
//     async (args) => {
//         const res = await pb.collection('cameras').update(args[0], args[1]);
//         return res;
//     }
// );

// export const deleteCameraThunk = createAsyncThunk(
//     'camera/deleteCameraThunk',
//     async (args) => {
//         const res = await pb.collection('cameras').delete(args);
//         return res;
//     }
// );

export const createCameraThunk = createAsyncThunk(
    'camera/createCameraThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .post(
                `${baseURL}/api/collections/cameras/records`,
                args[0],
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const getCameraThunk = createAsyncThunk(
    'camera/getCameraThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[0],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .get(
                `${baseURL}/api/collections/cameras/records`,
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const deleteCameraThunk = createAsyncThunk(
    'camera/deleteCameraThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .delete(
                `${baseURL}/api/collections/cameras/records/${args[0]}`,
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);
export const updateCameraThunk = createAsyncThunk(
    'camera/updateCameraThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[2],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .patch(
                `${baseURL}/api/collections/cameras/records/${args[0]}`,
                args[1],
                // header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });;
    }
);
// ======================================== //
export const getUserInforThunk = createAsyncThunk(
    'user/getUserInforThunk',
    async (args) => {
        const res = await pb
            .collection("users")
            .authWithPassword(args[0], args[1])
        return res;
    }
);
// ======================================== //
export const getCardInforThunk = createAsyncThunk(
    'card/getCardInforThunk',
    async (args) => {
        const res = await pb
            .collection("users")
            .authWithPassword(args[0], args[1])
        return res;
    }
);
// export const createCardInforThunk = createAsyncThunk(
//     'card/createCardInforThunk',
//     async (args) => {
//         const res = await pb.collection('attendances').create(args);
//         return res;
//     }
// );
export const createCardInforThunk = createAsyncThunk(
    'card/createCardInforThunk',
    async (args) => {
        const header = {
            headers: {
                Authorization: 'Bearer ' + args[1],
                // 'Content-Type': 'multipart/form-data',
            },
        };
        return await axios
            .post(
                `${baseURL}/api/collections/attendances/records`,
                args[0],
                header,
            )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
);



