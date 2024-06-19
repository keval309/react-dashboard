import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import { logger } from './app/utils/loggerUtils';
import router from './app/routes';
import { connectDb } from './app/config/dbConnect';
dotenv.config({ path: '.env' })


connectDb();

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));

app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));


app.use('/public', express.static('public'));

app.use("/", router)

app.listen(8000, () => {
    logger.info('server is running on 8000 port');

})


//throw error in below manner 

// if (!user) {
//     throw new ApiException(ErrorCodes.INVALID_PASS_OR_EMAIL);
// }

// if (!await comparePassword(data.password, user.password || '')) {
//     throw new ApiException(ErrorCodes.INVALID_CREDENTIALS);
// }

// if (!user.role.status) {
//     throw new ApiException(ErrorCodes.ROLE_IS_NOT_ACTIVE)
// }