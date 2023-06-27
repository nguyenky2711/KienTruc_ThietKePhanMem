import staffRouter from "./staffRouter";
import managerRouter from "./managerRouter";
import loginRouter from "./loginRouter";
const publicRouter = [
    loginRouter
  ];
  const privateRouter = [staffRouter, managerRouter];
  export { publicRouter, privateRouter };